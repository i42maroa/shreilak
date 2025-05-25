import { Injectable } from '@angular/core';
import { createClient, PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { from, Observable,  TimeoutError } from 'rxjs';
import { ChapterInterface } from '../../../data/interface/chapter.interface';
import { ResourceInterface } from '../../../data/interface/resource.interface';
import { ActivityInterface } from '../../../data/interface/activity.interface';
import { environment } from '../../../../environments/environment';
import { NotificationService } from '../notification/notification.service';
import { PostgrestBuilder } from '@supabase/postgrest-js';
import { LoaderService } from '../loader/loader.service';
import { FilterResourceInterface } from '../../../data/interface/filters.interface';

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {

    supabase: SupabaseClient;

    constructor(private notificationService:NotificationService, private loaderService:LoaderService) {
        this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    }

    getChapters():Observable<ChapterInterface[]| null> {
        const query =  this.supabase.from('chapters')
            .select(`*,
              objectives(*)`);

        return this.sendQueryToSupaBase<ChapterInterface[]>(query);
    }

    getResources():Observable<ResourceInterface[]| null> {
        const query =  this.supabase.from('resources')
            .select(`*`);

        return this.sendQueryToSupaBase<ResourceInterface[]>(query);
    }

    getActivity(idActivity: number):Observable<ActivityInterface| null> {
        const query =  this.supabase.from('activities')
            .select(`*,
                  activitiesResources (
                    id_resource,
                    resources:id_resource (*)
                  )`)
            .eq('id', idActivity)
            .single();
        return this.sendQueryToSupaBase<ActivityInterface>(query);
    }

    getResource(idResource: number):Observable<ResourceInterface| null> {
        const query =  this.supabase.from('resource')
            .select('*')
            .eq('id', idResource)
            .single();

        return this.sendQueryToSupaBase<ResourceInterface>(query);
    }

    getCharapter(idChapter:number):Observable<ChapterInterface| null> {
        const query =  this.supabase.from('chapters')
            .select(`*,
              objectives (*,
                activities (*,
                  activitiesResources (
                    id_resource,
                    resources:id_resource (*)
                  )
                )
              )
            `)
            .eq('id', idChapter)
            .single();

        return this.sendQueryToSupaBase<ChapterInterface>(query);
    }

    getFilterResource(filter: FilterResourceInterface):Observable<ResourceInterface[]| null>{
        const query = this.supabase.from('resources')
            .select('*')
            .ilike('name', `%${filter.name}%`)
            .in('type', filter.types);

        return this.sendQueryToSupaBase<ResourceInterface[]>(query);
    }

    private sendQueryToSupaBase <T>(query: PostgrestBuilder<T>):Observable<T | null>{
        this.loaderService.loading();
        return from(
            query.then(({ data, error }) => {
                if (error){
                    this.handleError(error);
                    return null;
                }
                if (data === null) {
                    const message = "No hay datos";
                    this.notificationService.showErrorModal(message);
                    return null;
                }
                this.loaderService.fininsh();
                return data;
            }));
    }

    private handleError(error: PostgrestError){
        let message = 'Error en la base de datos';

        if (error instanceof TimeoutError) {
            message = 'La solicitud está tardando demasiado. Verifica tu conexión.';
        } else if (error.code === 'PGRST116') {
            message = 'Elemento no encontrado';
        } else if (error.message) {
            message = `Error: ${error.message}`;
        }

        this.notificationService.showErrorModal(message);
        this.loaderService.fininsh();
        console.error('[SUPABASE ERROR]', error);
    }
}
