import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, Observable } from 'rxjs';
import { ChapterInterface } from '../../../data/interface/chapter.interface';
import { ResourceInterface } from '../../../data/interface/resource.interface';
import { ActivityInterface } from '../../../data/interface/activity.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SupabaseService {

    private supabase: SupabaseClient;

    constructor() {
        this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    }

    getChapters():Observable<ChapterInterface[]> {
        const query =  this.supabase.from('chapters')
            .select(`*,
              objectives(*)`);

        return from(query.then(({ data, error }) => {
            if (error) throw error;
            return data;
        }));
    }

    getActivity(idActivity: number):Observable<ActivityInterface> {
        const query =  this.supabase.from('activities')
            .select(`*,
                  activitiesResources (
                    id_resource,
                    resources:id_resource (*)
                  )`)
            .eq('id', idActivity)
            .single();

        return from(query.then(({ data, error }) => {
            if (error) throw error;
            return data;
        }));
    }

    getResource(idResource: number):Observable<ResourceInterface> {
        const query =  this.supabase.from('resource')
            .select('*')
            .eq('id', idResource)
            .single();

        return from(query.then(({ data, error }) => {
            if (error) throw error;
            return data;
        }));
    }

    getCharapter(idChapter:number):Observable<ChapterInterface> {
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

        return from(query.then(({ data, error }) => {
            if (error) throw error;
            return data;
        }));
    }
}
