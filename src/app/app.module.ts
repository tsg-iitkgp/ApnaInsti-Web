// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

// Basic app imports
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// Dependencies
import 'hammerjs';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { MarkdownModule } from 'ngx-markdown';
import { ShareButtonModule } from '@ngx-share/button';
import { FlyoutModule } from 'ngx-flyout';

// Extra modules
import { CustomReuseStrategy } from './routing';
import { MyMaterialClass } from './material-angular.module';
import { LoginActivate } from './loginactivate';

// Services
import { DataService } from './data.service';

// Pages
import { FeedComponent } from './page/feed/feed.component';
import { EventDetailsComponent } from './page/event-details/event-details.component';
import { CalendarComponent } from './page/calendar/calendar.component';
import { AddEventComponent } from './page/add-event/add-event.component';
import { UserDetailsComponent } from './page/user-details/user-details.component';
import { BodyDetailsComponent } from './page/body-details/body-details.component';
import { UpdateBodyComponent } from './page/update-body/update-body.component';
import { BlogComponent } from './page/blog/blog.component';
import { NewsComponent } from './page/news/news.component';
import { ExploreComponent } from './page/explore/explore.component';
import { MessComponent } from './page/mess/mess.component';
import { QuickLinksComponent } from './page/quick-links/quick-links.component';
import { SettingsComponent } from './page/settings/settings.component';
import { AboutComponent } from './page/settings/about/about.component';

// Cards
import { CardComponent } from './card/card.component';
import { EventCardComponent } from './card/event-card/event-card.component';
import { BodyCardComponent } from './card/body-card/body-card.component';
import { UserCardComponent } from './card/user-card/user-card.component';
import { NotifyCardComponent } from './card/notify-card/notify-card.component';

// Components
import { MyShareButtonsComponent } from './comp/my-share-buttons/my-share-buttons.component';
import { ListLoadingComponent } from './comp/list-loading/list-loading.component';
import { XunkSpinnerComponent } from './comp/xunk-spinner/xunk-spinner.component';
import { XunkCalendarComponent } from './comp/xunk-calendar/xunk-calendar.component';
import { RedirComponent } from './comp/redir/redir.component';
import { UpdateRoleComponent } from './comp/update-role/update-role.component';
import { LoginComponent } from './comp/login/login.component';

// Layout components
import { EventSidebarDesktopComponent } from './layout/event-sidebar-desktop/event-sidebar-desktop.component';
import { DesktopSplitComponent } from './layout/desktop-split/desktop-split.component';
import { NavmenuComponent } from './layout/navmenu/navmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    FeedComponent,
    EventDetailsComponent,
    CalendarComponent,
    AddEventComponent,
    LoginComponent,
    UserDetailsComponent,
    EventCardComponent,
    BodyCardComponent,
    BodyDetailsComponent,
    UserCardComponent,
    MyShareButtonsComponent,
    UpdateBodyComponent,
    BlogComponent,
    EventSidebarDesktopComponent,
    NewsComponent,
    ListLoadingComponent,
    XunkSpinnerComponent,
    ExploreComponent,
    MessComponent,
    QuickLinksComponent,
    SettingsComponent,
    AboutComponent,
    XunkCalendarComponent,
    DesktopSplitComponent,
    NotifyCardComponent,
    RedirComponent,
    UpdateRoleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,

    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    ImgFallbackModule,
    MarkdownModule.forRoot(),
    FlyoutModule,

    ShareButtonModule,

    RouterModule.forRoot([
      { path: '', redirectTo: 'feed', pathMatch: 'full' },
      { path: 'feed', component: FeedComponent, data: { state: 'base' } },
      { path: 'news', component: NewsComponent, data: { state: 'base' } },
      { path: 'calendar', component: CalendarComponent, data: { state: 'base' } },
      { path: 'explore', component: ExploreComponent, data: { state: 'base' } },
      { path: 'mess', component: MessComponent, data: { state: 'base' } },
      { path: 'quick-links', component: QuickLinksComponent, data: { state: 'base' } },
      { path: 'settings', component: SettingsComponent, data: { state: 'base' } },
      { path: 'about', component: AboutComponent, data: { state: 'overlay' } },

      { path: 'add-event', component: AddEventComponent, data: { state: 'overlay' }, canActivate: [LoginActivate] },
      { path: 'edit-event/:id', component: AddEventComponent, data: { state: 'overlay' }, canActivate: [LoginActivate] },
      { path: 'edit-body/:id', component: UpdateBodyComponent, data: { state: 'overlay' }, canActivate: [LoginActivate] },

      { path: 'event/:id', component: EventDetailsComponent, data: { state: 'overlay' } },
      { path: 'user/:id', component: UserDetailsComponent, data: { state: 'overlay' } },
      { path: 'org/:id', component: BodyDetailsComponent, data: { state: 'overlay' } },

      { path: 'blog/:blog', component: BlogComponent, data: { state: 'base' }, canActivate: [LoginActivate] },
      { path: 'login', component: LoginComponent, data: { state: 'base' } },
      { path: 'feedback', component: RedirComponent, data: { state: 'base' } },
      { path: 'android', component: RedirComponent, data: { state: 'base' } },
      { path: '**', redirectTo: 'feed' },
    ]),

    ServiceWorkerModule.register(environment.service_worker_url, { enabled: environment.production }),
    MyMaterialClass,
    LayoutModule,
  ],
  entryComponents: [
    NotifyCardComponent
  ],
  providers: [
    DataService,
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    LoginActivate,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
