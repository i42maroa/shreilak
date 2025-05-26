import { Component } from '@angular/core';
import { PaginationService } from '../../service/pagination/pagination.service';
import { combineLatest, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PaginationInfoInterface } from '../../../data/interface/pagination.interface';

@Component({
    selector: 'app-pagination',
    imports: [CommonModule],
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.css'
})
export class PaginationComponent {

    pageInfo$: Observable<PaginationInfoInterface>;

    constructor(private paginationService: PaginationService) {
        this.pageInfo$ = combineLatest([this.total, this.currentPage])
            .pipe(
                map(([totalP, actual]) => {
                    const total = Math.ceil(totalP / this.paginationService.resourcePerPage);
                    const pages = this.generateListPages(total, actual);
                    return { pages, actual, total };
                })
            );
    }

    before() {
        this.paginationService.anterior();
    }

    next() {
        this.paginationService.nextPage();
    }

    goPage(pageNumber: number) {
        this.paginationService.setPage(pageNumber);
    }

    generateListPages(total:number, actual:number):number[]{

        if (total <= 5){
            return Array.from({ length: total }, (_, i) => i + 1);
        }

        if(actual === 1 || actual=== 2){
            return [1,2,3,4, total];
        }
        else if(actual === total || actual === total -1){
            return [1,total-3,total-2,total-1, total];
        }


        return [1,actual-1,actual,actual+1, total];
    }

    get currentPage():Observable<number>{
        return this.paginationService.currentPage;
    }

    get total():Observable<number>{
        return this.paginationService.totalResource;
    }

    get paginationInfo():Observable<PaginationInfoInterface>{
        return this.pageInfo$;
    }
}
