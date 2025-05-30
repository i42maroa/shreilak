import { Injectable } from '@angular/core';
import { createClient, PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { from,  Observable,  TimeoutError } from 'rxjs';
import { ChapterInterface } from '../../../data/interface/chapter.interface';
import { ResourceInterface } from '../../../data/interface/resource.interface';
import { ActivityWithChapterInterface } from '../../../data/interface/activity.interface';
import { environment } from '../../../../environments/environment';
import { NotificationService } from '../notification/notification.service';
import { PostgrestBuilder } from '@supabase/postgrest-js';
import { LoaderService } from '../loader/loader.service';
import { PaginationService } from '../pagination/pagination.service';
import { DEFAULT_RESOURCES_TYPE, FilterResourceInterface, FilterResourceSupabaseInterface } from '../../../data/interface/filters.interface';
import { FlagInterface } from '../../../data/interface/flag.interface';

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {

    supabase: SupabaseClient;

    constructor(private notificationService:NotificationService,
        private loaderService:LoaderService,
        private paginationService: PaginationService,) {
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

    getFlags():Observable<FlagInterface[]| null> {
        const query =  this.supabase.from('flags')
            .select(`*`);

        return this.sendQueryToSupaBase<FlagInterface[]>(query);
    }

    getActivity(idActivity: number):Observable<ActivityWithChapterInterface| null> {
        const query =  this.supabase.from('activities')
            .select(`*,
                  objectives:id_objective (
                    id,
                    chapters:id_chapter (id,title)
                  ),
                  activitiesResources (
                    id_resource,
                    resources:id_resource (*)
                  )`)
            .eq('id', idActivity)
            .single();
        return this.sendQueryToSupaBase<ActivityWithChapterInterface>(query);
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

    getFilterResource(filter: FilterResourceInterface, page: number):Observable<ResourceInterface[]| null>{
        const resourcesByPage = this.paginationService.resourcePerPage;
        const fromP = (page - 1) * resourcesByPage;
        const to = fromP + resourcesByPage - 1;

        if(filter.types.length === 0){
            filter.types = DEFAULT_RESOURCES_TYPE;
        }

        const filterSupabase:FilterResourceSupabaseInterface ={
            flagsnames:[...filter.flags],
            namesearch:filter.name,
            types:filter.types.length === 0? DEFAULT_RESOURCES_TYPE : [...filter.types]
        }

        const query = this.supabase
            .rpc('resources_filter', filterSupabase)
            .range(fromP, to)
            .order('name');

        this.loaderService.loading();
        return from(
            query.then(({ data, error }) => {
                this.loaderService.finish();
                if (error) {
                    this.handleError(error);   // tu función de manejo de errores
                    return null;
                }
                if (!data) {
                    this.notificationService.showErrorModal('No hay datos');
                    return null;
                }
                return data;
            })
        );
    }

    private sendQueryToSupaBase<T>( query: PostgrestBuilder<T>,countTotal: boolean = false): Observable<T | null> {
        this.loaderService.loading();
        return from(
            query.then(({ data, error, count }) => {
                this.loaderService.finish();

                if (error) {
                    this.handleError(error);
                    return null;
                }

                if (!data) {
                    this.notificationService.showErrorModal('No hay datos');
                    return null;
                }

                if (countTotal) {
                    this.paginationService.setTotalResource(count ?? 0);
                }

                countTotal && this.paginationService.setTotalResource(count ?? 0)

                return data;
            })
        );
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
        this.loaderService.finish();
        console.error('[SUPABASE ERROR]', error);
    }
}
