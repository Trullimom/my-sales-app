import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
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
