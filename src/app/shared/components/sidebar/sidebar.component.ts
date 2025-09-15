import { Component } from '@angular/core';
import { FolderItem, MenuItem } from '../../model/sidebar';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MAILS } from '../../data/mail.data';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { label: 'Inbox', icon: '📥', route: '/mailbox/inbox', badge: MAILS?.length },
    { label: 'Flagged', icon: '⭐', route: '/mailbox/flagged' },
    { label: 'Draft', icon: '📝', route: '/mailbox' },
    { label: 'Sent', icon: '📤', route: '/mailbox' },
    { label: 'Trash', icon: '🗑', route: '/mailbox' },
    { label: 'More', icon: '📦', route: '/mailbox' }
  ];
  folders: FolderItem[] = [
    { name: 'Office', color: 'blue' },
    { name: 'Personal', color: 'red' },
    { name: 'Freelance', color: 'orange' }
  ];
}
