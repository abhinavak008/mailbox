import { Routes } from '@angular/router';
import { MailboxComponent } from './mailbox.component';

export const MAILBOX_ROUTES: Routes = [
    {
        path: '',
        component: MailboxComponent,
        children: [
            { path: '', redirectTo: 'inbox', pathMatch: 'full' },

            {
                path: 'inbox',
                loadComponent: () =>
                    import('../mailbox/inbox/inbox.component').then(m => m.InboxComponent)
            },
             {
                path: 'flagged',
                loadComponent: () =>
                    import('../mailbox/flagged/flagged.component').then(m => m.FlaggedComponent)
            },
        ]
    }
];
