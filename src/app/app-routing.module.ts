import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { HomeComponent } from './pages/home/home.component';
import { StatusComponent } from './pages/status/status.component';
import { NewChatsComponent } from './components/new-chats/new-chats.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'status',
    component: StatusComponent
  },
  {
    path: 'new-chats',
    component: NewChatsComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
