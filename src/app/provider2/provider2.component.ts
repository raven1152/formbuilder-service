import { Component } from '@angular/core';
import { ProviderFormBuilderService } from '../provider/provider-form-builder.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-provider2',
  templateUrl: './provider2.component.html',
  imports: [ReactiveFormsModule],
  providers: [],
})
export class Provider2Component {
  public form: FormGroup;
  public editProviderGroup: FormGroup;
  public formGroupJson: string = '';

  constructor(private formService: ProviderFormBuilderService) {
    this.form = formService.form;
    this.editProviderGroup = formService.getFormGroup('editProvider');
  }

  public submit() {
    this.formGroupJson = JSON.stringify(
      this.editProviderGroup.value,
      null,
      '  '
    );
  }
}
