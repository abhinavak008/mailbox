import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'mailbox',
        pathMatch: 'full'
    },
    {
        path: 'mailbox',
        loadChildren: () =>
            import('./features/mailbox/mailbox.routes').then(m => m.MAILBOX_ROUTES)
    }
];
