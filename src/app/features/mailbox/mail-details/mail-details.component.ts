import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mail } from '../../../shared/model/mail.model';
import { MAILS } from '../../../shared/data/mail.data';

@Component({
  selector: 'app-mail-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mail-details.component.html',
  styleUrl: './mail-details.component.scss'
})
export class MailDetailsComponent implements OnInit {
  mails: Mail[] = [];
  pagination: number = 0;   // start at index 0
  @Input() mail!: Mail;

  ngOnInit(): void {
    this.mails = MAILS;
    this.mail = this.mails[this.pagination]; // initialize
  }

  downloadAttachments(attachments: string[]) {
    if (!attachments || attachments.length === 0) {
      console.warn('No attachments found');
      return;
    }

    attachments.forEach((file, index) => {
      const link = document.createElement('a');
      link.href = file;
      link.download = `attachment-${index + 1}${this.getFileExtension(file)}`;
      link.click();
    });
  }

  private getFileExtension(filename: string): string {
    const parts = filename.split('.');
    return parts.length > 1 ? '.' + parts.pop() : '';
  }

  next() {
    this.pagination = (this.pagination + 1) % this.mails.length;
    this.mail = this.mails[this.pagination];
  }

  previous() {
    this.pagination = (this.pagination - 1 + this.mails.length) % this.mails.length;
    this.mail = this.mails[this.pagination];
  }
}
