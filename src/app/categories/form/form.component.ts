import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from '../category.dto';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './form.component.html',
  styles: ``,
})
export class CategoryFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private fb = inject(FormBuilder);
  categoryForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required],
  });


  @Output() save = new EventEmitter<Category>();

  onSubmit() {
    console.log("Button Save clicked in the CategoryFormComponent");
    this.save.emit(this.categoryForm.value as Category);
  }

  @Output() back = new EventEmitter();

  onBack() {
    this.back.emit();
  }

 @Input()
  set category(category: Category){
    this.categoryForm.setValue(category);
  }



}
