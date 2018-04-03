import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListComponent } from './pets/list/list.component';
import { NewComponent } from './pets/new/new.component';
import { DetailComponent } from './pets/detail/detail.component';
import { EditComponent } from './pets/edit/edit.component';
const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'new', component: NewComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'edit/:id', component: EditComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}