import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'profile/:id',
                component: ProfileComponent
            },
            {
                path: 'messages/:id',
                component: MessagesComponent
            }
        ]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);
