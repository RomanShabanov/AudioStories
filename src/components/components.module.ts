import { NgModule } from '@angular/core';
import { BookPreviewComponent } from './book-preview/book-preview';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [BookPreviewComponent],
	imports: [CommonModule],
	exports: [BookPreviewComponent]
})
export class ComponentsModule {}
