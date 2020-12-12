import { RouterModule, Routes} from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';

import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserAllItemsComponent } from './user-all-items/user-all-items.component';

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
            },
            {
                path: 'items/:id',
                component: UserAllItemsComponent
            },
            {
                path: 'review/:id',
                component: AddReviewComponent
            }
        ]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);
