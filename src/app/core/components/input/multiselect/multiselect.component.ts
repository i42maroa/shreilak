import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-multiselect',
    imports: [],
    templateUrl: './multiselect.component.html',
    styleUrl: './multiselect.component.css',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MultiselectComponent),
        multi: true
    }]
})
export class MultiselectComponent implements ControlValueAccessor{
    @Input() options: string[] = [];

    selectedOptions: string[] = [];
    dropdownOpen = false;

    private onChange = (value: string[]) => {};
    private onTouched = () => {};

    writeValue(value: string[]): void {
        this.selectedOptions = value || [];
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
    // opcional: manejar estado disabled si quieres
    }

    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
        this.onTouched();
    }

    toggleOption(option: string, event: Event) {
        event.stopPropagation();
        const idx = this.selectedOptions.indexOf(option);
        if (idx === -1) {
            this.selectedOptions = [...this.selectedOptions, option];
        } else {
            this.selectedOptions = this.selectedOptions.filter(o => o !== option);
        }
        this.onChange(this.selectedOptions);
    }

    isSelected(option: string): boolean {
        return this.selectedOptions.includes(option);
    }

    closeDropdown() {
        this.dropdownOpen = false;
    }
}
