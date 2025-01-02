import { Component } from '@angular/core';
import { ProviderFormBuilderService } from './provider-form-builder.service';
import { FormGroup, FormControl, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { Provider, providers } from './provider.model';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-provider',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.scss',
  providers: [JsonPipe],
})
export class ProviderComponent {
  public form: FormGroup;
  public editProviderGroup: FormGroup;
  public formGroupJson: string = '';
  public providers$ = of(providers);

  constructor(private formService: ProviderFormBuilderService) {
    this.form = formService.form;
    this.editProviderGroup = formService.getFormGroup('editProvider');

    this.selectedProviderControl.valueChanges
      .pipe(
        tap((value) => {
          console.log(value);
        })
      )
      .subscribe();
  }

  public get selectedProviderControl(): AbstractControl {
    let control = this.form.get('selectedProvider') as AbstractControl;
    return control;
  }

  public submit() {
    let provider = this.selectedProviderControl.value as Provider;
    console.log('provider', provider);
    this.formGroupJson = JSON.stringify(provider, null, '  ');
  }
}
