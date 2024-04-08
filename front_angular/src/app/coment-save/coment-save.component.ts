import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiCoreService} from '../api-core.service';
import { ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-coment-save',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule],
  templateUrl: './coment-save.component.html',
  styleUrl: './coment-save.component.scss'
})
export class ComentSaveComponent {
  public comentForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private apiCoreService: ApiCoreService
  ) {
    this.comentForm = this.formBuilder.group({
      id: ['', Validators.required],
      comentario: ['', Validators.required]
    });
  }

  guardarComentario(): void {
    this.apiCoreService.saveComment( this.comentForm.value.id, this.comentForm.value.comentario).then((response) => {
      alert('Comentario guardado:' + response.data.message);
      this.comentForm.value.id = '';
      this.comentForm.value.comentario = '';
    });

  }
}
