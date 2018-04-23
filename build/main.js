webpackJsonp([2],{

/***/ 207:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/caletest/caletest.module.ngfactory": [
		790,
		1
	],
	"../pages/event-modal/event-modal.module.ngfactory": [
		791,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 241;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@ionic-native/splash-screen/index.js
var splash_screen = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/@ionic-native/status-bar/index.js
var status_bar = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 4 modules
var ionic_angular = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@ionic/storage/dist/index.js
var dist = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/@angular/http/esm5/http.js
var http = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/http.js
var esm5_http = __webpack_require__(169);

// EXTERNAL MODULE: ./node_modules/angularfire2/index.js + 3 modules
var angularfire2 = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/angularfire2/database/index.js + 15 modules
var database = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/angularfire2/auth/index.js + 3 modules
var auth = __webpack_require__(398);

// EXTERNAL MODULE: ./node_modules/angularfire2/firestore/index.js + 8 modules
var firestore = __webpack_require__(400);

// EXTERNAL MODULE: ./node_modules/ionic2-calendar/index.js
var ionic2_calendar = __webpack_require__(528);

// CONCATENATED MODULE: ./src/enviroment/enviroment.ts
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDJzlwcQRKz0kwKyXRB44Lm-OMP805KSrQ',
        authDomain: 'smart-home-78b50.firebaseapp.com',
        databaseURL: 'https://smart-home-78b50.firebaseio.com',
        projectId: 'smart-home-78b50',
        storageBucket: 'smart-home-78b50.appspot.com',
        messagingSenderId: '1030652514308'
    }
};
//# sourceMappingURL=enviroment.js.map
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(2);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./src/providers/localdata/localdata.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';


;
var localdata_LocaldataProvider = /** @class */ (function () {
    // public http: HttpClient,
    function LocaldataProvider(storage) {
        this.storage = storage;
        this.datosGuardado = [];
        console.log('Hello LocaldataProvider Provider');
    }
    LocaldataProvider.prototype.getData = function () {
        // console.log('get al DATA->');
        return this.storage.get('datos');
    };
    LocaldataProvider.prototype.save = function (data) {
        console.log('salvando a DATA', data);
        this.datosGuardado.push(data);
        this.storage.set('datos', this.datosGuardado);
    };
    LocaldataProvider.prototype.deleteData = function (data) {
        return this.storage.remove(data);
    };
    LocaldataProvider.prototype.getDatosLocal = function () {
        var _this = this;
        return this.storage.get('datosLocal').then(function (data) {
            if (data !== null) {
                _this.datos = data;
                console.log('aki -->data', data);
            }
            else {
                _this.datos = [{
                        'startTime': Date.parse('Tue Apr 03 2018 12:00:00 GMT+0100'),
                        'endTime': Date.parse('Tue Apr 03 2018 12:00:00 GMT+0100'),
                        'allDay': true,
                        'persona': "JM",
                        'color': "yellow",
                        'title': "LIDL"
                    }];
            }
        });
    };
    LocaldataProvider.prototype.removeItem = function (data) {
        this.storage.remove(data).then(function () {
            console.log('item removed');
        });
    };
    LocaldataProvider.prototype.getLocalData = function () {
        return this.datos;
    };
    LocaldataProvider.prototype.setDatosLocaL = function (data) {
        console.log('<-- local store -->', data);
        this.storage.set('datosLocal', data);
    };
    LocaldataProvider.prototype.dateViewToDb = function (d) {
        var fech = Date.parse("'" + d + "'");
        return fech;
    };
    LocaldataProvider.prototype.dateDbtoView = function (d) {
        var fecha = new Date(d).toISOString();
        return fecha;
    };
    LocaldataProvider = __decorate([
        Object(core["w" /* Injectable */])(),
        __metadata("design:paramtypes", [dist["b" /* Storage */]])
    ], LocaldataProvider);
    return LocaldataProvider;
}());

//# sourceMappingURL=localdata.js.map
// EXTERNAL MODULE: ./node_modules/ionic2-calendar/calendar.js
var calendar = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/rxjs/RX.js
var RX = __webpack_require__(533);
var RX_default = /*#__PURE__*/__webpack_require__.n(RX);

// CONCATENATED MODULE: ./src/providers/services-firebase-service/services-firebase-service.ts
var services_firebase_service___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var services_firebase_service___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var _URL_DB = 'https://smart-home-78b50.firebaseio.com/';
var _CONDUCTORES = 'conductores.json';
var _URL_UPDATE = 'conductores';
// https://smart-home-78b50.firebaseio.com/conductores/
var configUrl = _URL_DB + _CONDUCTORES;
var configUrlUPDATE = _URL_DB + _URL_UPDATE;
var services_firebase_service_ServicesFirebaseServiceProvider = /** @class */ (function () {
    function ServicesFirebaseServiceProvider(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.conductores = [];
        this.item = [];
        console.log('Hello ServicesFirebaseServiceProvider Provider');
    }
    ServicesFirebaseServiceProvider.prototype.postData = function (conductores) {
        var newConductores = JSON.stringify(conductores);
        var headers = new http["d" /* Headers */]({
            'Content-type': 'aplication/json'
        });
        return this.http.post(_URL_DB + _CONDUCTORES, newConductores, { headers: headers })
            .map(function (res) {
            console.log('res->', res.json());
            return res.json();
        });
    };
    // httpClient
    ServicesFirebaseServiceProvider.prototype.getConfig = function () {
        return this.httpClient.get(configUrl);
    };
    ServicesFirebaseServiceProvider.prototype.getUpdate = function (id$) {
        var url = configUrlUPDATE + "/" + id$ + ".json";
        console.log('configUrlUPDATE', configUrlUPDATE);
        return this.httpClient.get(url);
    };
    ServicesFirebaseServiceProvider.prototype.putPresupuesto = function (datos, id$) {
        var data = JSON.stringify(datos);
        var headers = new http["d" /* Headers */]({
            'Content-type': 'aplication/json'
        });
        var url = configUrlUPDATE + "/" + id$ + ".json";
        return this.http.put(url, data, { headers: headers })
            .map(function (res) {
            console.log('akiiiiiiii- update', res.json());
            return res.json();
        });
    };
    ServicesFirebaseServiceProvider.prototype.delPresupuesto = function (id$) {
        var url = configUrlUPDATE + "/" + id$ + ".json";
        return this.http.delete(url)
            .map(function (res) {
            console.log('akiiiiiiii- delete', res.json());
            return res.json();
        });
    };
    ServicesFirebaseServiceProvider = services_firebase_service___decorate([
        Object(core["w" /* Injectable */])(),
        services_firebase_service___metadata("design:paramtypes", [http["e" /* Http */], esm5_http["c" /* HttpClient */]])
    ], ServicesFirebaseServiceProvider);
    return ServicesFirebaseServiceProvider;
}());

//# sourceMappingURL=services-firebase-service.js.map
// CONCATENATED MODULE: ./src/pages/home/home.ts
var home___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var home___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { DatosLocal} from '../../providers/localdata/datosLocal'; 


var home_HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, alertCtrl, localDataService, firebeService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.localDataService = localDataService;
        this.firebeService = firebeService;
        // eventSource;
        this.eventSource = [];
        this.viewTitle = "App test";
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.tap = 0;
        this.press = 0;
        this.conductores = [];
        this.datosGuardados = [];
        this.datos = [{
                startTime: "Tue Apr 03",
                endTime: "Tue Apr 03",
                allDay: true,
                persona: "JM",
                color: "yellow",
                title: "LIDL"
            }];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getAllData();
        // this.myCalendar.loadEvents();
        //LOCAL STORE
        // this.localDataService.getData().then((todos) => {
        //   if(todos){
        //     let data = todos;
        //     console.log('get--data', data);
        //     this.datosGuardados.push(data);
        //     console.log('this.datosGuardados__lenght--> ',this.datosGuardados.length);
        //     console.log('this.datosGuardados--> ',this.datosGuardados);
        //     for (let i=0; i< this.datosGuardados.length; i++) {        
        //       console.log('this.datosGuardados[i]->', this.datosGuardados[i]);
        //       this.cargaEvents(this.datosGuardados[i]);           
        //     }   
        //     // this.getAllData();
        //     this.myCalendar.loadEvents();
        //   }
        // });  
    };
    HomePage.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                // console.log("--data->", eventData);
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                // console.log('AAAADEvent -->this.eventSource >', this.eventSource);
                events_1.push(eventData);
                // this.localDataService.setDatosLocaL(eventData);
                _this.localDataService.save(eventData);
                // console.log("--> save->", eventData);
                _this.firebeService.postData(eventData)
                    .subscribe(function (newPres) {
                    // console.log('SALVANDO EN FIREBASE--> ENVIADO', eventData);
                });
                // this.myCalendar
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    HomePage.prototype.onViewTitleChanged = function (event) {
        console.log("onViewTitleChanged event-->", event);
        this.title = event;
        // console.log("this.viewTitle-->", this.viewTitle);
    };
    HomePage.prototype.onEventSelected = function (event) {
        var start = moment(event.startTime).format('LLLL');
        var end = moment(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: '<strong>' + event.persona + '</strong><br>From: ' + start + '<br>To: ' + end,
            buttons: ['OK']
        });
        // console.log("AKI onEventSelected-->alert -->",alert);
        alert.present();
    };
    HomePage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    HomePage.prototype.loadEvents = function () {
        // this.eventSource = this.createRandomEvents();
        // this.eventSource = this.datosGuardados;
        this.eventSource = this.conductores;
        // console.log('this.conductores', this.conductores );
    };
    // https://github.com/twinssbc/Ionic2-Calendar#instance-methods
    HomePage.prototype.cargaEvents = function (data) {
        // this.eventSource.push(eve);
        // console.log('data', data);
        if (data && data.length == 0) {
            // console.log('data loadEvents ', data);
            // console.log('datalenght', data.length);
            var title = data.title;
            var startTime = data.startTime;
            // console.log('startTime',startTime);
            var endTime = new Date(data.endTime);
            // console.log('startTime',startTime);
            var allDay = false;
            var persona = data.persona;
            var color = data.color;
            // this.eventSource.push(data);  
            this.eventSource.push({
                title: title,
                startTime: startTime,
                endTime: endTime,
                allDay: allDay,
                persona: persona,
                color: color
            });
            // console.log('loadEVENT-> this.eventSource-->', this.eventSource);
            // this.myCalendar.loadEvents();
            // console.log('loadEVENT-> this.myCalendar-->', this.myCalendar);
        }
        else {
            for (var i = 0; i < data.length; i++) {
                // console.log('data loadEvents ', data);
                // console.log('datalenght', data.length);
                var title = data[i].title;
                var startTime = data[i].startTime;
                // console.log('startTime',startTime);
                var endTime = new Date(data[i].endTime);
                // console.log('startTime',startTime);
                var allDay = false;
                var persona = data[i].persona;
                var color = data[i].color;
                this.eventSource.push({
                    title: title,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: allDay,
                    persona: persona,
                    color: color
                });
            }
        }
    };
    // TODO pasarlo al servicio proveedores
    HomePage.prototype.getAllData = function () {
        var _this = this;
        this.firebeService.getConfig().subscribe(function (res) {
            // console.log('res-->', res);
            // tslint:disable-next-line:forin
            for (var id$ in res) {
                var p = res[id$];
                p.id$ = id$;
                _this.conductores.push(res[id$]);
            }
            // console.log('get datos FIREBASE', this.conductores);
            for (var i = 0; i < _this.conductores.length; i++) {
                // console.log('this.conductores[i]->', this.conductores[i]);
                // console.log('data loadEvents ', this.conductores);
                // console.log('this.conductoreslenght', this.conductores.length);
                var title = _this.conductores[i].title;
                var startTime = new Date(_this.conductores[i].startTime);
                // console.log('startTime',startTime);
                var endTime = new Date(_this.conductores[i].endTime);
                // console.log('startTime',startTime);
                var allDay = false;
                var persona = _this.conductores[i].persona;
                var color = _this.conductores[i].color;
                _this.eventSource.push({
                    title: title,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: allDay,
                    persona: persona,
                    color: color
                });
            }
            _this.myCalendar.loadEvents();
        });
    };
    // 
    HomePage.prototype.pressEvent = function (e) {
        this.press++;
    };
    HomePage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    home___decorate([
        Object(core["Y" /* ViewChild */])(calendar["a" /* CalendarComponent */]),
        home___metadata("design:type", calendar["a" /* CalendarComponent */])
    ], HomePage.prototype, "myCalendar", void 0);
    HomePage = home___decorate([
        Object(core["k" /* Component */])({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        home___metadata("design:paramtypes", [ionic_angular["h" /* NavController */], ionic_angular["g" /* ModalController */],
            ionic_angular["b" /* AlertController */],
            localdata_LocaldataProvider,
            services_firebase_service_ServicesFirebaseServiceProvider])
    ], HomePage);
    return HomePage;
}());

////////////////////////////////////////////////////////
// createRandomEvents() {
//   var events = [];
//   for (var i = 0; i < 50; i += 1) {
//     var date = new Date();
//     var eventType = Math.floor(Math.random() * 2);
//     var startDay = Math.floor(Math.random() * 90) - 45;
//     var endDay = Math.floor(Math.random() * 2) + startDay;
//     var startTime;
//     var endTime;
//     if (eventType === 0) {
//       startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
//       if (endDay === startDay) {
//           endDay += 1;
//       }
//       endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
//       events.push({
//           title: 'All Day - ' + i,
//           startTime: startTime,
//           endTime: endTime,
//           allDay: true
//         });
//     } else {
//       var startMinute = Math.floor(Math.random() * 24 * 60);
//       var endMinute = Math.floor(Math.random() * 180) + startMinute;
//       startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
//       endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
//       events.push({
//           title: 'Event - ' + i,
//           startTime: startTime,
//           endTime: endTime,
//           allDay: false
//       });
//     }
//   }
//   return events;
// }
// loadEvents: function() {
//   this.eventSource.push({
//     title: 'test',
//     startTime: startTime,
//     endTime: endTime,
//     allDay: false
// });
// this.myCalendar.loadEvents();
// } 
//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var app_component_MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = home_HomePage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = app_component___decorate([
        Object(core["k" /* Component */])({
            templateUrl: 'app.html'
        }),
        app_component___metadata("design:paramtypes", [ionic_angular["j" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//el calendario modal 

// firebase




// otro
// import { CalendarModule } from 'ionic2-calendar2';

var app_module_AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = app_module___decorate([
        Object(core["D" /* NgModule */])({
            declarations: [
                app_component_MyApp,
                home_HomePage
            ],
            imports: [
                ionic2_calendar["a" /* NgCalendarModule */],
                platform_browser["a" /* BrowserModule */],
                ionic_angular["e" /* IonicModule */].forRoot(app_component_MyApp, {}, {
                    links: [
                        { loadChildren: '../pages/caletest/caletest.module.ngfactory#CaletestPageModuleNgFactory', name: 'CaletestPage', segment: 'caletest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-modal/event-modal.module.ngfactory#EventModalPageModuleNgFactory', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                dist["a" /* IonicStorageModule */].forRoot(),
                angularfire2["a" /* AngularFireModule */].initializeApp(environment.firebase),
                firestore["b" /* AngularFirestoreModule */],
                auth["b" /* AngularFireAuthModule */],
                database["b" /* AngularFireDatabaseModule */],
                http["f" /* HttpModule */],
                esm5_http["d" /* HttpClientModule */],
            ],
            bootstrap: [ionic_angular["c" /* IonicApp */]],
            entryComponents: [
                app_component_MyApp,
                home_HomePage
            ],
            providers: [
                status_bar["a" /* StatusBar */],
                splash_screen["a" /* SplashScreen */],
                { provide: core["q" /* ErrorHandler */], useClass: ionic_angular["d" /* IonicErrorHandler */] },
                localdata_LocaldataProvider,
                services_firebase_service_ServicesFirebaseServiceProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.js
var app_root = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(488);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(489);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(490);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js + 1 modules
var loading_component_ngfactory = __webpack_require__(491);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(492);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(493);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(494);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js + 1 modules
var select_popover_component_ngfactory = __webpack_require__(495);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(496);

// EXTERNAL MODULE: ./node_modules/ionic2-calendar/calendar.ngfactory.js + 7 modules
var calendar_ngfactory = __webpack_require__(487);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.ngfactory.js
var nav_ngfactory = __webpack_require__(787);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/split-pane/split-pane.js
var split_pane = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav.js
var nav = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform_platform = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/ionic-angular/transitions/transition-controller.js
var transition_controller = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(13);

// CONCATENATED MODULE: ./src/app/app.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















var styles_MyApp = [];
var RenderType_MyApp = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_MyApp, data: {} });

function View_MyApp_0(_l) { return core["_41" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 2, "ion-nav", [], null, null, null, nav_ngfactory["b" /* View_Nav_0 */], nav_ngfactory["a" /* RenderType_Nav */])), core["_35" /* ɵprd */](6144, null, split_pane["a" /* RootNode */], null, [nav["a" /* Nav */]]), core["_16" /* ɵdid */](2, 4374528, null, 0, nav["a" /* Nav */], [[2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], app["a" /* App */], config["a" /* Config */], platform_platform["a" /* Platform */], core["p" /* ElementRef */], core["G" /* NgZone */], core["N" /* Renderer */], core["l" /* ComponentFactoryResolver */], gesture_controller["l" /* GestureController */], transition_controller["a" /* TransitionController */], [2, deep_linker["a" /* DeepLinker */]], dom_controller["a" /* DomController */], core["q" /* ErrorHandler */]], { root: [0, "root"] }, null), (_l()(), core["_39" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.rootPage; _ck(_v, 2, 0, currVal_0); }, null); }
function View_MyApp_Host_0(_l) { return core["_41" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_MyApp_0, RenderType_MyApp)), core["_16" /* ɵdid */](1, 49152, null, 0, app_component_MyApp, [platform_platform["a" /* Platform */], status_bar["a" /* StatusBar */], splash_screen["a" /* SplashScreen */]], null, null)], null, null); }
var MyAppNgFactory = core["_13" /* ɵccf */]("ng-component", app_component_MyApp, View_MyApp_Host_0, {}, {}, []);

//# sourceMappingURL=app.component.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(497);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/menu/menu-toggle.js
var menu_toggle = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/menu-controller.js
var menu_controller = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(498);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(499);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/typography/typography.js
var typography = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/grid.js
var grid = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(137);

// EXTERNAL MODULE: ./node_modules/ionic2-calendar/calendar.service.js
var calendar_service = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab-container.ngfactory.js
var fab_container_ngfactory = __webpack_require__(788);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab-container.js
var fab_container = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab.ngfactory.js
var fab_ngfactory = __webpack_require__(789);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab.js
var fab = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab-list.js
var fab_list = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-controller.js
var alert_controller = __webpack_require__(97);

// CONCATENATED MODULE: ./src/pages/home/home.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







































var styles_HomePage = [];
var RenderType_HomePage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_HomePage, data: {} });

function View_HomePage_0(_l) { return core["_41" /* ɵvid */](0, [core["_37" /* ɵqud */](402653184, 1, { myCalendar: 0 }), (_l()(), core["_17" /* ɵeld */](1, 0, null, null, 32, "ion-header", [], null, null, null, null, null)), core["_16" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_39" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_17" /* ɵeld */](4, 0, null, null, 28, "ion-navbar", [["class", "toolbar"], ["color", "default-primary-color"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_16" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_39" /* ɵted */](-1, 3, ["\n    \n      "])), (_l()(), core["_17" /* ɵeld */](7, 0, null, 0, 8, "button", [["icon-only", ""], ["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (core["_29" /* ɵnov */](_v, 9).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](8, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), core["_16" /* ɵdid */](9, 1064960, null, 0, menu_toggle["a" /* MenuToggle */], [menu_controller["a" /* MenuController */], [2, view_controller["a" /* ViewController */]], [2, button_button["a" /* Button */]], [2, navbar["a" /* Navbar */]]], { menuToggle: [0, "menuToggle"] }, null), core["_16" /* ɵdid */](10, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_39" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_17" /* ɵeld */](13, 0, null, 0, 1, "ion-icon", [["name", "car"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](14, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_39" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_39" /* ɵted */](-1, 3, ["\n    \n    "])), (_l()(), core["_17" /* ɵeld */](17, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_16" /* ɵdid */](18, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_39" /* ɵted */](-1, 0, [" VAMOS PAL'ITER..."])), (_l()(), core["_39" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](21, 0, null, 2, 10, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](22, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_37" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), core["_39" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](25, 0, null, null, 5, "button", [["icon-only", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addEvent() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](26, 1097728, [[3, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_39" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_17" /* ɵeld */](28, 0, null, 0, 1, "ion-icon", [["name", "add"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](29, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_39" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["_39" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_39" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_39" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_39" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_17" /* ɵeld */](35, 0, null, null, 60, "ion-content", [["class", "home-page"], ["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](36, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_39" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_17" /* ɵeld */](38, 0, null, 1, 5, "div", [], null, null, null, null, null)), (_l()(), core["_39" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](40, 0, null, null, 2, "h2", [["color", "secondary-text-color"], ["ion-text", ""], ["text-center", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](41, 16384, null, 0, typography["a" /* Typography */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_39" /* ɵted */](42, null, ["", ""])), (_l()(), core["_39" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_39" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_17" /* ɵeld */](45, 0, null, 1, 16, "ion-grid", [["class", "grid"]], null, null, null, null, null)), core["_16" /* ɵdid */](46, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_39" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](48, 0, null, null, 12, "ion-row", [["class", "row"]], null, null, null, null, null)), core["_16" /* ɵdid */](49, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_39" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_17" /* ɵeld */](51, 0, null, null, 8, "ion-col", [["class", "col"], ["col-12", ""], ["col-lg-4", ""], ["col-md-6", ""], ["col-sm-9", ""], ["col-xl-3", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](52, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_39" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](54, 0, null, null, 1, "ion-icon", [["color", "secondary"], ["name", "md-information-circle"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](55, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { color: [0, "color"], name: [1, "name"] }, null), (_l()(), core["_39" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](57, 0, null, null, 1, "span", [["class", "event-detail"], ["color", "secondary-text-color"]], null, null, null, null, null)), (_l()(), core["_39" /* ɵted */](-1, null, ["mantener presionado en el d\u00EDa para a\u00F1adir conductor"])), (_l()(), core["_39" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_39" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_39" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_39" /* ɵted */](-1, 1, ["\n  "])), (_l()(), core["_17" /* ɵeld */](63, 0, null, 1, 6, "div", [], null, null, null, null, null)), (_l()(), core["_39" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](65, 0, null, null, 3, "calendar", [["class", "calendar"], ["endHour", "17"], ["startHour", "8"], ["step", "30"]], null, [[null, "press"], [null, "onEventSelected"], [null, "onTitleChanged"], [null, "onTimeSelected"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("press" === en)) {
        var pd_0 = (_co.addEvent() !== false);
        ad = (pd_0 && ad);
    } if (("onEventSelected" === en)) {
        var pd_1 = (_co.onEventSelected($event) !== false);
        ad = (pd_1 && ad);
    } if (("onTitleChanged" === en)) {
        var pd_2 = (_co.onViewTitleChanged($event) !== false);
        ad = (pd_2 && ad);
    } if (("onTimeSelected" === en)) {
        var pd_3 = (_co.onTimeSelected($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, calendar_ngfactory["c" /* View_CalendarComponent_0 */], calendar_ngfactory["b" /* RenderType_CalendarComponent */])), core["_35" /* ɵprd */](512, null, calendar_service["a" /* CalendarService */], calendar_service["a" /* CalendarService */], []), core["_16" /* ɵdid */](67, 245760, [[1, 4]], 0, calendar["a" /* CalendarComponent */], [calendar_service["a" /* CalendarService */], core["C" /* LOCALE_ID */]], { currentDate: [0, "currentDate"], eventSource: [1, "eventSource"], calendarMode: [2, "calendarMode"], step: [3, "step"], startHour: [4, "startHour"], endHour: [5, "endHour"] }, { onEventSelected: "onEventSelected", onTimeSelected: "onTimeSelected", onTitleChanged: "onTitleChanged" }), (_l()(), core["_39" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_39" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_39" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_17" /* ɵeld */](71, 0, null, 1, 0, "br", [], null, null, null, null, null)), (_l()(), core["_39" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_17" /* ɵeld */](73, 0, null, 0, 21, "ion-fab", [["bottom", ""], ["right", ""]], null, null, null, fab_container_ngfactory["b" /* View_FabContainer_0 */], fab_container_ngfactory["a" /* RenderType_FabContainer */])), core["_16" /* ɵdid */](74, 1228800, null, 2, fab_container["a" /* FabContainer */], [platform_platform["a" /* Platform */]], null, null), core["_37" /* ɵqud */](335544320, 4, { _mainButton: 0 }), core["_37" /* ɵqud */](603979776, 5, { _fabLists: 1 }), (_l()(), core["_39" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_17" /* ɵeld */](78, 0, null, 0, 4, "button", [["color", "secondary"], ["ion-fab", ""]], null, null, null, fab_ngfactory["b" /* View_FabButton_0 */], fab_ngfactory["a" /* RenderType_FabButton */])), core["_16" /* ɵdid */](79, 49152, [[4, 4]], 0, fab["a" /* FabButton */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_39" /* ɵted */](-1, 0, ["\n      "])), (_l()(), core["_17" /* ɵeld */](81, 0, null, 0, 1, "ion-icon", [["name", "arrow-dropleft"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](82, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_39" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_17" /* ɵeld */](84, 0, null, 0, 9, "ion-fab-list", [["side", "left"]], null, null, null, null, null)), core["_16" /* ɵdid */](85, 16384, [[5, 4]], 1, fab_list["a" /* FabList */], [core["p" /* ElementRef */], core["N" /* Renderer */], config["a" /* Config */], platform_platform["a" /* Platform */]], null, null), core["_37" /* ɵqud */](603979776, 6, { _setbuttons: 1 }), (_l()(), core["_39" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](88, 0, null, null, 3, "button", [["color", "primaryDos"], ["ion-fab", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addEvent() !== false);
        ad = (pd_0 && ad);
    } return ad; }, fab_ngfactory["b" /* View_FabButton_0 */], fab_ngfactory["a" /* RenderType_FabButton */])), core["_16" /* ɵdid */](89, 49152, [[6, 4], [4, 4]], 0, fab["a" /* FabButton */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_17" /* ɵeld */](90, 0, null, 0, 1, "ion-icon", [["name", "md-add"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_16" /* ɵdid */](91, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_39" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_39" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_39" /* ɵted */](-1, 0, ["\n  "])), (_l()(), core["_39" /* ɵted */](-1, 1, ["\n\n\n"])), (_l()(), core["_39" /* ɵted */](-1, null, ["\n\n\n"])), (_l()(), core["_39" /* ɵted */](-1, null, ["\n  \n  "])), (_l()(), core["_39" /* ɵted */](-1, null, ["\n\n\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "default-primary-color"; _ck(_v, 5, 0, currVal_2); var currVal_4 = ""; _ck(_v, 9, 0, currVal_4); var currVal_6 = "car"; _ck(_v, 14, 0, currVal_6); var currVal_8 = "add"; _ck(_v, 29, 0, currVal_8); var currVal_11 = "secondary-text-color"; _ck(_v, 41, 0, currVal_11); var currVal_14 = "secondary"; var currVal_15 = "md-information-circle"; _ck(_v, 55, 0, currVal_14, currVal_15); var currVal_16 = _co.calendar.currentDate; var currVal_17 = _co.eventSource; var currVal_18 = _co.calendar.mode; var currVal_19 = "30"; var currVal_20 = "8"; var currVal_21 = "17"; _ck(_v, 67, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_22 = "secondary"; _ck(_v, 79, 0, currVal_22); var currVal_24 = "arrow-dropleft"; _ck(_v, 82, 0, currVal_24); var currVal_25 = "primaryDos"; _ck(_v, 89, 0, currVal_25); var currVal_27 = "md-add"; _ck(_v, 91, 0, currVal_27); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_29" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = core["_29" /* ɵnov */](_v, 9).isHidden; _ck(_v, 7, 0, currVal_3); var currVal_5 = core["_29" /* ɵnov */](_v, 14)._hidden; _ck(_v, 13, 0, currVal_5); var currVal_7 = core["_29" /* ɵnov */](_v, 29)._hidden; _ck(_v, 28, 0, currVal_7); var currVal_9 = core["_29" /* ɵnov */](_v, 36).statusbarPadding; var currVal_10 = core["_29" /* ɵnov */](_v, 36)._hasRefresher; _ck(_v, 35, 0, currVal_9, currVal_10); var currVal_12 = _co.title; _ck(_v, 42, 0, currVal_12); var currVal_13 = core["_29" /* ɵnov */](_v, 55)._hidden; _ck(_v, 54, 0, currVal_13); var currVal_23 = core["_29" /* ɵnov */](_v, 82)._hidden; _ck(_v, 81, 0, currVal_23); var currVal_26 = core["_29" /* ɵnov */](_v, 91)._hidden; _ck(_v, 90, 0, currVal_26); }); }
function View_HomePage_Host_0(_l) { return core["_41" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-home", [], null, null, null, View_HomePage_0, RenderType_HomePage)), core["_16" /* ɵdid */](1, 49152, null, 0, home_HomePage, [nav_controller["a" /* NavController */], modal_controller["a" /* ModalController */], alert_controller["a" /* AlertController */], localdata_LocaldataProvider, services_firebase_service_ServicesFirebaseServiceProvider], null, null)], null, null); }
var HomePageNgFactory = core["_13" /* ɵccf */]("page-home", home_HomePage, View_HomePage_Host_0, {}, {}, []);

//# sourceMappingURL=home.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-config.js
var gesture_config = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-controller.js
var action_sheet_controller = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/events.js
var events = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-controller.js
var loading_controller = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(195);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/url-serializer.js
var url_serializer = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-controller.js
var picker_controller = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/tap-click.js + 3 modules
var tap_click = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-controller.js
var toast_controller = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/@ionic/storage/dist/storage.js
var storage = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/ionic2-calendar/calendar.module.js
var calendar_module = __webpack_require__(402);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ionic-error-handler.js
var ionic_error_handler = __webpack_require__(384);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform-registry.js
var platform_registry = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/ng-module-loader.js
var ng_module_loader = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/mode-registry.js
var mode_registry = __webpack_require__(151);

// CONCATENATED MODULE: ./src/app/app.module.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




























































var AppModuleNgFactory = core["_14" /* ɵcmf */](app_module_AppModule, [app_root["b" /* IonicApp */]], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["l" /* ComponentFactoryResolver */], core["_10" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], calendar_ngfactory["a" /* CalendarComponentNgFactory */], MyAppNgFactory, HomePageNgFactory]], [3, core["l" /* ComponentFactoryResolver */]], core["E" /* NgModuleRef */]]), core["_26" /* ɵmpd */](5120, core["C" /* LOCALE_ID */], core["_36" /* ɵq */], [[3, core["C" /* LOCALE_ID */]]]), core["_26" /* ɵmpd */](4608, common["l" /* NgLocalization */], common["k" /* NgLocaleLocalization */], [core["C" /* LOCALE_ID */], [2, common["u" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["k" /* ɵi */], esm5_forms["k" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["c" /* FormBuilder */], esm5_forms["c" /* FormBuilder */], []), core["_26" /* ɵmpd */](5120, core["b" /* APP_ID */], core["_19" /* ɵi */], []), core["_26" /* ɵmpd */](5120, core["A" /* IterableDiffers */], core["_27" /* ɵn */], []), core["_26" /* ɵmpd */](5120, core["B" /* KeyValueDiffers */], core["_30" /* ɵo */], []), core["_26" /* ɵmpd */](4608, platform_browser["c" /* DomSanitizer */], platform_browser["q" /* ɵe */], [common["c" /* DOCUMENT */]]), core["_26" /* ɵmpd */](6144, core["R" /* Sanitizer */], null, [platform_browser["c" /* DomSanitizer */]]), core["_26" /* ɵmpd */](4608, platform_browser["f" /* HAMMER_GESTURE_CONFIG */], gesture_config["a" /* IonicGestureConfig */], []), core["_26" /* ɵmpd */](5120, platform_browser["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new platform_browser["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new platform_browser["o" /* ɵKeyEventsPlugin */](p1_0), new platform_browser["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [common["c" /* DOCUMENT */], core["G" /* NgZone */], common["c" /* DOCUMENT */], common["c" /* DOCUMENT */], platform_browser["f" /* HAMMER_GESTURE_CONFIG */]]), core["_26" /* ɵmpd */](4608, platform_browser["e" /* EventManager */], platform_browser["e" /* EventManager */], [platform_browser["d" /* EVENT_MANAGER_PLUGINS */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](135680, platform_browser["m" /* ɵDomSharedStylesHost */], platform_browser["m" /* ɵDomSharedStylesHost */], [common["c" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, platform_browser["l" /* ɵDomRendererFactory2 */], platform_browser["l" /* ɵDomRendererFactory2 */], [platform_browser["e" /* EventManager */], platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_26" /* ɵmpd */](6144, core["P" /* RendererFactory2 */], null, [platform_browser["l" /* ɵDomRendererFactory2 */]]), core["_26" /* ɵmpd */](6144, platform_browser["p" /* ɵSharedStylesHost */], null, [platform_browser["m" /* ɵDomSharedStylesHost */]]), core["_26" /* ɵmpd */](4608, core["W" /* Testability */], core["W" /* Testability */], [core["G" /* NgZone */]]), core["_26" /* ɵmpd */](4608, platform_browser["h" /* Meta */], platform_browser["h" /* Meta */], [common["c" /* DOCUMENT */]]), core["_26" /* ɵmpd */](4608, platform_browser["i" /* Title */], platform_browser["i" /* Title */], [common["c" /* DOCUMENT */]]), core["_26" /* ɵmpd */](5120, angularfire2["b" /* FirebaseApp */], angularfire2["f" /* ɵa */], [angularfire2["c" /* FirebaseAppConfigToken */], angularfire2["d" /* FirebaseAppName */]]), core["_26" /* ɵmpd */](4608, firestore["a" /* AngularFirestore */], firestore["a" /* AngularFirestore */], [angularfire2["b" /* FirebaseApp */], [2, firestore["c" /* ɵa */]]]), core["_26" /* ɵmpd */](5120, auth["a" /* AngularFireAuth */], auth["c" /* _getAngularFireAuth */], [angularfire2["b" /* FirebaseApp */]]), core["_26" /* ɵmpd */](5120, database["a" /* AngularFireDatabase */], database["c" /* _getAngularFireDatabase */], [angularfire2["b" /* FirebaseApp */]]), core["_26" /* ɵmpd */](4608, http["c" /* BrowserXhr */], http["c" /* BrowserXhr */], []), core["_26" /* ɵmpd */](4608, http["h" /* ResponseOptions */], http["b" /* BaseResponseOptions */], []), core["_26" /* ɵmpd */](5120, http["j" /* XSRFStrategy */], http["k" /* ɵa */], []), core["_26" /* ɵmpd */](4608, http["i" /* XHRBackend */], http["i" /* XHRBackend */], [http["c" /* BrowserXhr */], http["h" /* ResponseOptions */], http["j" /* XSRFStrategy */]]), core["_26" /* ɵmpd */](4608, http["g" /* RequestOptions */], http["a" /* BaseRequestOptions */], []), core["_26" /* ɵmpd */](5120, http["e" /* Http */], http["l" /* ɵb */], [http["i" /* XHRBackend */], http["g" /* RequestOptions */]]), core["_26" /* ɵmpd */](4608, esm5_http["h" /* HttpXsrfTokenExtractor */], esm5_http["n" /* ɵh */], [common["c" /* DOCUMENT */], core["J" /* PLATFORM_ID */], esm5_http["l" /* ɵf */]]), core["_26" /* ɵmpd */](4608, esm5_http["o" /* ɵi */], esm5_http["o" /* ɵi */], [esm5_http["h" /* HttpXsrfTokenExtractor */], esm5_http["m" /* ɵg */]]), core["_26" /* ɵmpd */](5120, esm5_http["a" /* HTTP_INTERCEPTORS */], function (p0_0) { return [p0_0]; }, [esm5_http["o" /* ɵi */]]), core["_26" /* ɵmpd */](4608, esm5_http["k" /* ɵe */], esm5_http["k" /* ɵe */], []), core["_26" /* ɵmpd */](6144, esm5_http["i" /* XhrFactory */], null, [esm5_http["k" /* ɵe */]]), core["_26" /* ɵmpd */](4608, esm5_http["g" /* HttpXhrBackend */], esm5_http["g" /* HttpXhrBackend */], [esm5_http["i" /* XhrFactory */]]), core["_26" /* ɵmpd */](6144, esm5_http["b" /* HttpBackend */], null, [esm5_http["g" /* HttpXhrBackend */]]), core["_26" /* ɵmpd */](4608, esm5_http["f" /* HttpHandler */], esm5_http["j" /* ɵc */], [esm5_http["b" /* HttpBackend */], core["y" /* Injector */]]), core["_26" /* ɵmpd */](4608, esm5_http["c" /* HttpClient */], esm5_http["c" /* HttpClient */], [esm5_http["f" /* HttpHandler */]]), core["_26" /* ɵmpd */](4608, action_sheet_controller["a" /* ActionSheetController */], action_sheet_controller["a" /* ActionSheetController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, alert_controller["a" /* AlertController */], alert_controller["a" /* AlertController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, events["a" /* Events */], events["a" /* Events */], []), core["_26" /* ɵmpd */](4608, util_form["a" /* Form */], util_form["a" /* Form */], []), core["_26" /* ɵmpd */](4608, haptic["a" /* Haptic */], haptic["a" /* Haptic */], [platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](4608, keyboard["a" /* Keyboard */], keyboard["a" /* Keyboard */], [config["a" /* Config */], platform_platform["a" /* Platform */], core["G" /* NgZone */], dom_controller["a" /* DomController */]]), core["_26" /* ɵmpd */](4608, loading_controller["a" /* LoadingController */], loading_controller["a" /* LoadingController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](5120, common["g" /* LocationStrategy */], ionic_angular_module["c" /* provideLocationStrategy */], [common["s" /* PlatformLocation */], [2, common["a" /* APP_BASE_HREF */]], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, common["f" /* Location */], common["f" /* Location */], [common["g" /* LocationStrategy */]]), core["_26" /* ɵmpd */](5120, url_serializer["b" /* UrlSerializer */], url_serializer["d" /* setupUrlSerializer */], [app["a" /* App */], url_serializer["a" /* DeepLinkConfigToken */]]), core["_26" /* ɵmpd */](5120, deep_linker["a" /* DeepLinker */], deep_linker["b" /* setupDeepLinker */], [app["a" /* App */], url_serializer["b" /* UrlSerializer */], common["f" /* Location */], module_loader["b" /* ModuleLoader */], core["l" /* ComponentFactoryResolver */]]), core["_26" /* ɵmpd */](4608, modal_controller["a" /* ModalController */], modal_controller["a" /* ModalController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_26" /* ɵmpd */](4608, picker_controller["a" /* PickerController */], picker_controller["a" /* PickerController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, popover_controller["a" /* PopoverController */], popover_controller["a" /* PopoverController */], [app["a" /* App */], config["a" /* Config */], deep_linker["a" /* DeepLinker */]]), core["_26" /* ɵmpd */](4608, tap_click["a" /* TapClick */], tap_click["a" /* TapClick */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */]]), core["_26" /* ɵmpd */](4608, toast_controller["a" /* ToastController */], toast_controller["a" /* ToastController */], [app["a" /* App */], config["a" /* Config */]]), core["_26" /* ɵmpd */](4608, transition_controller["a" /* TransitionController */], transition_controller["a" /* TransitionController */], [platform_platform["a" /* Platform */], config["a" /* Config */]]), core["_26" /* ɵmpd */](5120, storage["a" /* Storage */], storage["c" /* provideStorage */], [storage["b" /* StorageConfigToken */]]), core["_26" /* ɵmpd */](4608, status_bar["a" /* StatusBar */], status_bar["a" /* StatusBar */], []), core["_26" /* ɵmpd */](4608, splash_screen["a" /* SplashScreen */], splash_screen["a" /* SplashScreen */], []), core["_26" /* ɵmpd */](4608, localdata_LocaldataProvider, localdata_LocaldataProvider, [storage["a" /* Storage */]]), core["_26" /* ɵmpd */](4608, services_firebase_service_ServicesFirebaseServiceProvider, services_firebase_service_ServicesFirebaseServiceProvider, [http["e" /* Http */], esm5_http["c" /* HttpClient */]]), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["j" /* ɵba */], esm5_forms["j" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["d" /* FormsModule */], esm5_forms["d" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* ReactiveFormsModule */], esm5_forms["i" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, calendar_module["a" /* NgCalendarModule */], calendar_module["a" /* NgCalendarModule */], []), core["_26" /* ɵmpd */](512, core["q" /* ErrorHandler */], ionic_error_handler["a" /* IonicErrorHandler */], []), core["_26" /* ɵmpd */](256, config["b" /* ConfigToken */], {}, []), core["_26" /* ɵmpd */](1024, platform_registry["a" /* PlatformConfigToken */], platform_registry["b" /* providePlatformConfigs */], []), core["_26" /* ɵmpd */](1024, platform_platform["a" /* Platform */], platform_platform["b" /* setupPlatform */], [platform_browser["b" /* DOCUMENT */], platform_registry["a" /* PlatformConfigToken */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](1024, config["a" /* Config */], config["c" /* setupConfig */], [config["b" /* ConfigToken */], platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](512, dom_controller["a" /* DomController */], dom_controller["a" /* DomController */], [platform_platform["a" /* Platform */]]), core["_26" /* ɵmpd */](512, menu_controller["a" /* MenuController */], menu_controller["a" /* MenuController */], []), core["_26" /* ɵmpd */](512, app["a" /* App */], app["a" /* App */], [config["a" /* Config */], platform_platform["a" /* Platform */], [2, menu_controller["a" /* MenuController */]]]), core["_26" /* ɵmpd */](512, gesture_controller["l" /* GestureController */], gesture_controller["l" /* GestureController */], [app["a" /* App */]]), core["_26" /* ɵmpd */](256, url_serializer["a" /* DeepLinkConfigToken */], { links: [{ loadChildren: "../pages/caletest/caletest.module.ngfactory#CaletestPageModuleNgFactory", name: "CaletestPage", segment: "caletest", priority: "low", defaultHistory: [] }, { loadChildren: "../pages/event-modal/event-modal.module.ngfactory#EventModalPageModuleNgFactory", name: "EventModalPage", segment: "event-modal", priority: "low", defaultHistory: [] }] }, []), core["_26" /* ɵmpd */](512, core["j" /* Compiler */], core["j" /* Compiler */], []), core["_26" /* ɵmpd */](512, ng_module_loader["a" /* NgModuleLoader */], ng_module_loader["a" /* NgModuleLoader */], [core["j" /* Compiler */]]), core["_26" /* ɵmpd */](1024, module_loader["b" /* ModuleLoader */], module_loader["c" /* provideModuleLoader */], [ng_module_loader["a" /* NgModuleLoader */], core["y" /* Injector */]]), core["_26" /* ɵmpd */](1024, core["c" /* APP_INITIALIZER */], function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [platform_browser["s" /* ɵh */](p0_0), mode_registry["a" /* registerModeConfigs */](p1_0), events["b" /* setupProvideEvents */](p2_0, p2_1), tap_click["b" /* setupTapClick */](p3_0, p3_1, p3_2, p3_3, p3_4), module_loader["d" /* setupPreloading */](p4_0, p4_1, p4_2, p4_3)]; }, [[2, core["F" /* NgProbeToken */]], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], app["a" /* App */], gesture_controller["l" /* GestureController */], config["a" /* Config */], url_serializer["a" /* DeepLinkConfigToken */], module_loader["b" /* ModuleLoader */], core["G" /* NgZone */]]), core["_26" /* ɵmpd */](512, core["d" /* ApplicationInitStatus */], core["d" /* ApplicationInitStatus */], [[2, core["c" /* APP_INITIALIZER */]]]), core["_26" /* ɵmpd */](131584, core["f" /* ApplicationRef */], core["f" /* ApplicationRef */], [core["G" /* NgZone */], core["_11" /* ɵConsole */], core["y" /* Injector */], core["q" /* ErrorHandler */], core["l" /* ComponentFactoryResolver */], core["d" /* ApplicationInitStatus */]]), core["_26" /* ɵmpd */](512, core["e" /* ApplicationModule */], core["e" /* ApplicationModule */], [core["f" /* ApplicationRef */]]), core["_26" /* ɵmpd */](512, platform_browser["a" /* BrowserModule */], platform_browser["a" /* BrowserModule */], [[3, platform_browser["a" /* BrowserModule */]]]), core["_26" /* ɵmpd */](512, dist["a" /* IonicStorageModule */], dist["a" /* IonicStorageModule */], []), core["_26" /* ɵmpd */](512, angularfire2["a" /* AngularFireModule */], angularfire2["a" /* AngularFireModule */], []), core["_26" /* ɵmpd */](512, firestore["b" /* AngularFirestoreModule */], firestore["b" /* AngularFirestoreModule */], []), core["_26" /* ɵmpd */](512, auth["b" /* AngularFireAuthModule */], auth["b" /* AngularFireAuthModule */], []), core["_26" /* ɵmpd */](512, database["b" /* AngularFireDatabaseModule */], database["b" /* AngularFireDatabaseModule */], []), core["_26" /* ɵmpd */](512, http["f" /* HttpModule */], http["f" /* HttpModule */], []), core["_26" /* ɵmpd */](512, esm5_http["e" /* HttpClientXsrfModule */], esm5_http["e" /* HttpClientXsrfModule */], []), core["_26" /* ɵmpd */](512, esm5_http["d" /* HttpClientModule */], esm5_http["d" /* HttpClientModule */], []), core["_26" /* ɵmpd */](512, app_module_AppModule, app_module_AppModule, []), core["_26" /* ɵmpd */](256, angularfire2["c" /* FirebaseAppConfigToken */], { apiKey: "AIzaSyDJzlwcQRKz0kwKyXRB44Lm-OMP805KSrQ", authDomain: "smart-home-78b50.firebaseapp.com", databaseURL: "https://smart-home-78b50.firebaseio.com", projectId: "smart-home-78b50", storageBucket: "smart-home-78b50.appspot.com", messagingSenderId: "1030652514308" }, []), core["_26" /* ɵmpd */](256, angularfire2["d" /* FirebaseAppName */], undefined, []), core["_26" /* ɵmpd */](256, esm5_http["l" /* ɵf */], "XSRF-TOKEN", []), core["_26" /* ɵmpd */](256, esm5_http["m" /* ɵg */], "X-XSRF-TOKEN", []), core["_26" /* ɵmpd */](256, app_root["a" /* AppRootToken */], app_component_MyApp, []), core["_26" /* ɵmpd */](256, common["a" /* APP_BASE_HREF */], "/", []), core["_26" /* ɵmpd */](256, storage["b" /* StorageConfigToken */], null, [])]); });

//# sourceMappingURL=app.module.ngfactory.js.map
// CONCATENATED MODULE: ./src/app/main.ts



Object(core["_4" /* enableProdMode */])();
Object(platform_browser["j" /* platformBrowser */])().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 262,
	"./af.js": 262,
	"./ar": 263,
	"./ar-dz": 264,
	"./ar-dz.js": 264,
	"./ar-kw": 265,
	"./ar-kw.js": 265,
	"./ar-ly": 266,
	"./ar-ly.js": 266,
	"./ar-ma": 267,
	"./ar-ma.js": 267,
	"./ar-sa": 268,
	"./ar-sa.js": 268,
	"./ar-tn": 269,
	"./ar-tn.js": 269,
	"./ar.js": 263,
	"./az": 270,
	"./az.js": 270,
	"./be": 271,
	"./be.js": 271,
	"./bg": 272,
	"./bg.js": 272,
	"./bm": 273,
	"./bm.js": 273,
	"./bn": 274,
	"./bn.js": 274,
	"./bo": 275,
	"./bo.js": 275,
	"./br": 276,
	"./br.js": 276,
	"./bs": 277,
	"./bs.js": 277,
	"./ca": 278,
	"./ca.js": 278,
	"./cs": 279,
	"./cs.js": 279,
	"./cv": 280,
	"./cv.js": 280,
	"./cy": 281,
	"./cy.js": 281,
	"./da": 282,
	"./da.js": 282,
	"./de": 283,
	"./de-at": 284,
	"./de-at.js": 284,
	"./de-ch": 285,
	"./de-ch.js": 285,
	"./de.js": 283,
	"./dv": 286,
	"./dv.js": 286,
	"./el": 287,
	"./el.js": 287,
	"./en-au": 288,
	"./en-au.js": 288,
	"./en-ca": 289,
	"./en-ca.js": 289,
	"./en-gb": 290,
	"./en-gb.js": 290,
	"./en-ie": 291,
	"./en-ie.js": 291,
	"./en-il": 292,
	"./en-il.js": 292,
	"./en-nz": 293,
	"./en-nz.js": 293,
	"./eo": 294,
	"./eo.js": 294,
	"./es": 295,
	"./es-do": 296,
	"./es-do.js": 296,
	"./es-us": 297,
	"./es-us.js": 297,
	"./es.js": 295,
	"./et": 298,
	"./et.js": 298,
	"./eu": 299,
	"./eu.js": 299,
	"./fa": 300,
	"./fa.js": 300,
	"./fi": 301,
	"./fi.js": 301,
	"./fo": 302,
	"./fo.js": 302,
	"./fr": 303,
	"./fr-ca": 304,
	"./fr-ca.js": 304,
	"./fr-ch": 305,
	"./fr-ch.js": 305,
	"./fr.js": 303,
	"./fy": 306,
	"./fy.js": 306,
	"./gd": 307,
	"./gd.js": 307,
	"./gl": 308,
	"./gl.js": 308,
	"./gom-latn": 309,
	"./gom-latn.js": 309,
	"./gu": 310,
	"./gu.js": 310,
	"./he": 311,
	"./he.js": 311,
	"./hi": 312,
	"./hi.js": 312,
	"./hr": 313,
	"./hr.js": 313,
	"./hu": 314,
	"./hu.js": 314,
	"./hy-am": 315,
	"./hy-am.js": 315,
	"./id": 316,
	"./id.js": 316,
	"./is": 317,
	"./is.js": 317,
	"./it": 318,
	"./it.js": 318,
	"./ja": 319,
	"./ja.js": 319,
	"./jv": 320,
	"./jv.js": 320,
	"./ka": 321,
	"./ka.js": 321,
	"./kk": 322,
	"./kk.js": 322,
	"./km": 323,
	"./km.js": 323,
	"./kn": 324,
	"./kn.js": 324,
	"./ko": 325,
	"./ko.js": 325,
	"./ky": 326,
	"./ky.js": 326,
	"./lb": 327,
	"./lb.js": 327,
	"./lo": 328,
	"./lo.js": 328,
	"./lt": 329,
	"./lt.js": 329,
	"./lv": 330,
	"./lv.js": 330,
	"./me": 331,
	"./me.js": 331,
	"./mi": 332,
	"./mi.js": 332,
	"./mk": 333,
	"./mk.js": 333,
	"./ml": 334,
	"./ml.js": 334,
	"./mr": 335,
	"./mr.js": 335,
	"./ms": 336,
	"./ms-my": 337,
	"./ms-my.js": 337,
	"./ms.js": 336,
	"./mt": 338,
	"./mt.js": 338,
	"./my": 339,
	"./my.js": 339,
	"./nb": 340,
	"./nb.js": 340,
	"./ne": 341,
	"./ne.js": 341,
	"./nl": 342,
	"./nl-be": 343,
	"./nl-be.js": 343,
	"./nl.js": 342,
	"./nn": 344,
	"./nn.js": 344,
	"./pa-in": 345,
	"./pa-in.js": 345,
	"./pl": 346,
	"./pl.js": 346,
	"./pt": 347,
	"./pt-br": 348,
	"./pt-br.js": 348,
	"./pt.js": 347,
	"./ro": 349,
	"./ro.js": 349,
	"./ru": 350,
	"./ru.js": 350,
	"./sd": 351,
	"./sd.js": 351,
	"./se": 352,
	"./se.js": 352,
	"./si": 353,
	"./si.js": 353,
	"./sk": 354,
	"./sk.js": 354,
	"./sl": 355,
	"./sl.js": 355,
	"./sq": 356,
	"./sq.js": 356,
	"./sr": 357,
	"./sr-cyrl": 358,
	"./sr-cyrl.js": 358,
	"./sr.js": 357,
	"./ss": 359,
	"./ss.js": 359,
	"./sv": 360,
	"./sv.js": 360,
	"./sw": 361,
	"./sw.js": 361,
	"./ta": 362,
	"./ta.js": 362,
	"./te": 363,
	"./te.js": 363,
	"./tet": 364,
	"./tet.js": 364,
	"./tg": 365,
	"./tg.js": 365,
	"./th": 366,
	"./th.js": 366,
	"./tl-ph": 367,
	"./tl-ph.js": 367,
	"./tlh": 368,
	"./tlh.js": 368,
	"./tr": 369,
	"./tr.js": 369,
	"./tzl": 370,
	"./tzl.js": 370,
	"./tzm": 371,
	"./tzm-latn": 372,
	"./tzm-latn.js": 372,
	"./tzm.js": 371,
	"./ug-cn": 373,
	"./ug-cn.js": 373,
	"./uk": 374,
	"./uk.js": 374,
	"./ur": 375,
	"./ur.js": 375,
	"./uz": 376,
	"./uz-latn": 377,
	"./uz-latn.js": 377,
	"./uz.js": 376,
	"./vi": 378,
	"./vi.js": 378,
	"./x-pseudo": 379,
	"./x-pseudo.js": 379,
	"./yo": 380,
	"./yo.js": 380,
	"./zh-cn": 381,
	"./zh-cn.js": 381,
	"./zh-hk": 382,
	"./zh-hk.js": 382,
	"./zh-tw": 383,
	"./zh-tw.js": 383
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 509;

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[500]);
//# sourceMappingURL=main.js.map