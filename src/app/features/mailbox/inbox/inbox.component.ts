import { Component } from '@angular/core';
import { Mail } from '../../../shared/model/mail.model';
import { MAILS } from '../../../shared/data/mail.data';
import { CommonModule } from '@angular/common';
import { MailDetailsComponent } from "../mail-details/mail-details.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';

@Component({
  selector: 'app-inbox',
  imports: [CommonModule, MailDetailsComponent, ReactiveFormsModule],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent {
  mails: Mail[] = [];
  selectedMail: Mail | null = null;
  searchControl = new FormControl('');
  filteredMails: Mail[] = [];

  ngOnInit(): void {
    this.mails = MAILS;
    this.selectedMail = this.mails[0];

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        startWith(''),
        map(value => this.filterMails(value || ''))
      )
      .subscribe(result => (this.filteredMails = result));
  }

  selectMail(mail: Mail) {
    this.selectedMail = mail;
  }

  filterMails(query: string): Mail[] {
    query = query.toLowerCase();
    return this.mails.filter(
      mail =>
        mail.sender.toLowerCase().includes(query) ||
        mail.subject.toLowerCase().includes(query)
    );
  }

}
