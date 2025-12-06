import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { EmployeeDirectory } from './employee-directory/employee-directory';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path: '', component: Home },
    {path: 'about', component: About },
    {path: 'employee-directory', component: EmployeeDirectory },
    {path: '**', component: PageNotFound }
];
