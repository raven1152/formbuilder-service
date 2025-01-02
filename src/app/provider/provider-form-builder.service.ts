import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

const zipCodePattern = /^(\d{5})((-\d{4})?)$/;

@Injectable({
  providedIn: 'root',
})
export class ProviderFormBuilderService {
  private fg: FormGroup;

  constructor(private builder: FormBuilder) {
    this.fg = builder.group({
      selectedProvider: [''],

      editProvider: builder.group({
        contacts: builder.array([]),
        id: ['1'],
        logoFileName: ['logo.png'],
        name: ['George Washington'],
        pinImageFileName: ['pin-image.jpg'],
      }),

      editContact: builder.group({
        email: [''],
        firstName: [''],
        lastName: [''],
        phone: [''],
        isPrimary: [''],

        mailingAddress: builder.group({
          streetAddress1: [''],
          city: [''],
          state: [''],
          zipCode: ['', Validators.pattern(zipCodePattern)],
        }),
      }),
    });
  }

  public get form(): FormGroup {
    return this.fg;
  }

  public getFormArray(name: string): FormArray {
    return this.fg.get(name) as FormArray;
  }

  public getFormGroup(groupName: string): FormGroup {
    return this.fg.get(groupName) as FormGroup;
  }
}
