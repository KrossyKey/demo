webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StorageID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_secure_notes_secure_notes__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_keychain_keychain__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_accounts_accounts__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Storage IDs
 */
var StorageID;
(function (StorageID) {
    StorageID["accounts"] = "accounts";
    StorageID["secureNotes"] = "secureNotes";
})(StorageID || (StorageID = {}));
/**
 * App Mode
 */
var Mode;
(function (Mode) {
    Mode[Mode["desktop"] = 0] = "desktop";
    Mode[Mode["mobile"] = 1] = "mobile";
    Mode[Mode["browser"] = 2] = "browser";
})(Mode || (Mode = {}));
/**
 * App Component
 */
var AppComponent = /** @class */ (function () {
    /**
     * Intializes AppComponent
     * @param translate Translation Service
     * @param platform Platform
     * @param statusBar Status Bar
     * @param splashScreen Splash Screen
     */
    function AppComponent(translate, platform, statusBar, splashScreen, keychainProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keychainProvider = keychainProvider;
        /**
         * Root Page
         */
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_accounts_accounts__["a" /* AccountsPage */];
        this.initializeApp();
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        // used for an example of ngFor and navigation
        translate.get('titles').subscribe(function (titles) {
            _this.pages = [
                { title: titles.accounts, component: __WEBPACK_IMPORTED_MODULE_8__pages_accounts_accounts__["a" /* AccountsPage */] },
                { title: titles.secureNotes, component: __WEBPACK_IMPORTED_MODULE_4__pages_secure_notes_secure_notes__["a" /* SecureNotesPage */] },
                { title: titles.settings, component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */] }
            ];
        });
    }
    /**
     * Intializes App
     */
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.keychainProvider.removePassphraseSecurely();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    /**
     * Opens Pages
     * @param page Page to open
     */
    AppComponent.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    /**
     * States what mode keychain is set for
     * DO NOT CHANGE. Instead use correct build command found in package.json
     */
    AppComponent.mode = Mode.browser;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], AppComponent.prototype, "nav", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title class = "handwriting">KrossyKey</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose\n              ion-item\n              *ngFor="let p of pages"\n              (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage"\n         #content\n         swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_keychain_keychain__["a" /* KeychainProvider */]])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCOUNT_SCHEMA; });
var ACCOUNT_SCHEMA = {
    type: "object",
    properties: {
        title: {
            type: "string",
            minLength: 1
        },
        userName: {
            type: "string",
            minLength: 1
        },
        password: {
            type: "string",
            minLength: 1
        },
        url: {
            type: "string",
            minLength: 1
        },
        twoFactor: {
            type: "string",
            minLength: 1
        },
        uuid: {
            type: "string",
            minLength: 1,
            hidden: true
        }
    },
    additionalProperties: false,
    required: ["title", "userName", "password", "url", "uuid"]
};
//# sourceMappingURL=account.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the CryptoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CryptoProvider = /** @class */ (function () {
    function CryptoProvider() {
    }
    CryptoProvider.prototype.decryptStringFromPhrase = function (passphrase, encodedData) {
        var _this = this;
        return this.importKey(passphrase).then(function (importedKey) {
            return _this.decryptStringFromKey(importedKey, encodedData);
        });
    };
    CryptoProvider.prototype.decryptStringFromKey = function (importedKey, encodedData) {
        var _this = this;
        //Decode string
        var decoded = this.stringToArrayBuffer(window.atob(encodedData));
        var salt = decoded.slice(0, 16);
        var data = decoded.slice(16);
        return this.deriveKey(importedKey, salt).then(function (key) {
            return window.crypto.subtle.decrypt({
                name: "AES-GCM",
                iv: salt,
                tagLength: 128,
            }, key, data)
                .then(function (decrypted) {
                return JSON.parse(_this.bufferToString(new Uint8Array(decrypted)));
            })
                .catch(function (error) {
                return null;
            });
        });
    };
    CryptoProvider.prototype.encryptObjectFromPhrase = function (passphrase, object) {
        var _this = this;
        return this.importKey(passphrase).then(function (importedKey) {
            return _this.encryptObjectFromKey(importedKey, object);
        });
    };
    CryptoProvider.prototype.encryptObjectFromKey = function (importedKey, object) {
        var _this = this;
        var salt = this.generateSalt();
        return this.deriveKey(importedKey, salt).then(function (key) {
            return window.crypto.subtle.encrypt({
                name: "AES-GCM",
                //Don't re-use initialization vectors!
                //Always generate a new iv every time your encrypt!
                //Recommended to use 12 bytes length
                iv: salt,
                //Tag length (optional)
                tagLength: 128,
            }, key, //from generateKey or importKey above
            _this.stringToArrayBuffer(JSON.stringify(object)))
                .then(function (encrypted) {
                //Note: Converts to Base64 string
                //Concatonate typed arrays
                var saltLength = salt.length;
                var encryptedLength = encrypted.byteLength;
                var data = new Uint8Array(saltLength + encryptedLength);
                data.set(salt, 0);
                data.set(new Uint8Array(encrypted), saltLength);
                return window.btoa(_this.bufferToString(data));
                //returns an ArrayBuffer containing the encrypted data
            });
        });
    };
    /**
     * Converts from string to array buffer
     * Credits:  https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
     * @param str
     */
    CryptoProvider.prototype.stringToArrayBuffer = function (str) {
        var encBuff = new Uint8Array(str.length);
        for (var i = 0; i < encBuff.length; i++) {
            encBuff[i] = str.charCodeAt(i);
        }
        return encBuff;
    };
    /**
     * Converts from array buffer to string
     * Credits:  https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
     * @param Array buffer
     */
    CryptoProvider.prototype.bufferToString = function (buf) {
        return String.fromCharCode.apply(null, buf);
    };
    /**
     * Generates a salt
     * @returns IV representing salt
     */
    CryptoProvider.prototype.generateSalt = function () {
        return window.crypto.getRandomValues(new Uint8Array(16));
    };
    /**
     * Gets key from passprase
     * @param passphrase Passphrase to get key from
     */
    CryptoProvider.prototype.importKey = function (passphrase) {
        return window.crypto.subtle.importKey("raw", //only "raw" is allowed
        this.stringToArrayBuffer(passphrase), "PBKDF2", false, //whether the key is extractable (i.e. can be used in exportKey)
        ["deriveKey", "deriveBits"] //can be any combination of "deriveKey" and "deriveBits"
        );
    };
    CryptoProvider.prototype.deriveKey = function (importedKey, salt) {
        return window.crypto.subtle.deriveKey({
            "name": "PBKDF2",
            salt: salt,
            iterations: 2000,
            hash: { name: "SHA-256" },
        }, importedKey, //your key from generateKey or importKey
        {
            name: "AES-GCM",
            //the generateKey parameters for that type of algorithm
            length: 256,
        }, false, //whether the derived key is extractable (i.e. can be used in exportKey)
        ["encrypt", "decrypt"] //limited to the options in that algorithm's importKey
        );
    };
    CryptoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CryptoProvider);
    return CryptoProvider;
}());

//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_account__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__secure_items_secure_items__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schema_account__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_keychain_keychain__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_notp__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_notp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_notp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_thirty_two__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_thirty_two___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_thirty_two__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_qrcode__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_qrcode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(50);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Page for displaying passwords
 */
var AccountsPage = /** @class */ (function (_super) {
    __extends(AccountsPage, _super);
    /**
     * Intializes __PasswordsPage__
     * @param modalCtrl Modal Controller
     * @param keychain Keychain Provider
     */
    function AccountsPage(modalCtrl, keychain, platform, sanitizer) {
        var _this = _super.call(this, modalCtrl, keychain, __WEBPACK_IMPORTED_MODULE_4__schema_account__["a" /* ACCOUNT_SCHEMA */], __WEBPACK_IMPORTED_MODULE_6__app_app_component__["c" /* StorageID */].accounts, platform) || this;
        _this.sanitizer = sanitizer;
        /**
         * Two Factor step
         */
        _this.step = 30;
        /**
         * Barcode Images
         */
        _this.imgs = {};
        /**
         * Time remaining
         */
        _this.timeRemaining = 0;
        /**
         * Account defaults
         */
        _this.objectDefaults = __WEBPACK_IMPORTED_MODULE_2__types_account__["a" /* ACCOUNT_DEFAULT */];
        _this.calcTimeRemaining();
        return _this;
    }
    /**
     * Generates Token from secret key
     * @param twoFactorModel Model of Two Factor Identified
     */
    AccountsPage.prototype.generateToken = function (account) {
        if (account.twoFactor) {
            var unformatted = account.twoFactor.replace(/\W+/g, '').toUpperCase();
            var bin = __WEBPACK_IMPORTED_MODULE_8_thirty_two___default.a.decode(unformatted);
            return __WEBPACK_IMPORTED_MODULE_7_notp___default.a.totp.gen(bin);
        }
        else {
            return NaN;
        }
    };
    AccountsPage.prototype.loadPercentage = function (timeLeft) {
        return ((this.step - timeLeft) / 30) * 100;
    };
    /**
     * Generates QR Code
     * @param twoFactor Two Factor Identified
     */
    AccountsPage.prototype.generateQrCode = function (account) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_qrcode___default.a.toDataURL(this.barCodeUrl(account), function (err, imageUrl) {
            if (imageUrl) {
                _this.imgs[account.uuid] = imageUrl;
            }
        });
    };
    AccountsPage.prototype.calcTimeRemaining = function () {
        var _this = this;
        var date = new Date();
        var epoch = date.getTime();
        this.timeRemaining = this.step - Math.floor(epoch / 1000) % this.step;
        setTimeout(function () {
            _this.calcTimeRemaining();
        }, 1000);
    };
    /**
     * Shows barcode
     * @param twoFactor Two Factor Identified
     */
    AccountsPage.prototype.showCredentials = function (account) {
        this.generateQrCode(account);
        this.showItem(account.uuid);
    };
    /**
     * Barcode URL
     * @param twoFactorModel Two Factor Identified Model
     * @returns Bar code url
     */
    AccountsPage.prototype.barCodeUrl = function (account) {
        if (account.twoFactor) {
            return 'otpauth://totp/'
                + encodeURI(account.userName || '')
                + '?secret=' + account.twoFactor.replace(/[\s\.\_\-]+/g, '').toUpperCase()
                + '&algorithm=' + ('SHA1')
                + '&digits=' + (6)
                + '&period=' + (this.step);
        }
    };
    AccountsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accounts',template:/*ion-inline-start:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/accounts/accounts.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button\n            menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end\n                 [hidden]="(keychain.storageResp !== 3)">\n      <button ion-button\n              icon-start\n              (click)="addItem()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title>{{ \'titles.accounts\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid *ngFor="let itemGroupsName of itemGroupsNames(itemGroups)">\n    <h1>\n      {{itemGroupsName}}\n    </h1>\n    <ion-row>\n      <ion-col *ngFor="let item of itemGroups[itemGroupsName]"\n               col-12\n               col-sm-9\n               col-md-6\n               col-lg-4>\n        <ion-card>\n          <ion-item>\n\n            <ion-icon color="primary"\n                      item-start\n                      name="person"></ion-icon>\n\n            <h2>{{item.title}}</h2>\n\n            <p>{{item.userName}}</p>\n\n          </ion-item>\n\n\n          <ion-fab right\n                   top>\n            <button ion-fab\n                    mini><ion-icon name="key"></ion-icon></button>\n\n            <ion-fab-list style="background-color: white;  box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.1);"\n                          side="left">\n\n\n              <button ion-fab\n                      mini\n                      clear\n                      (click)="deleteItem(item)"> \n                                  <ion-icon name="trash"></ion-icon>\n                            </button>\n              <button ion-fab\n                      clear\n                      (click)="editItem(item)"> \n                                  <ion-icon name="create"></ion-icon>\n                            </button>\n              <button [hidden]="(shownItems[item.uuid] !== undefined)"\n                      ion-fab\n                      mini\n                      clear\n                      (click)="showCredentials(item)"> \n                                    <ion-icon name="eye"></ion-icon>\n                                  </button>\n\n              <button [hidden]="(shownItems[item.uuid] === undefined)"\n                      ion-fab\n                      mini\n                      clear\n                      (click)="hideItem(item.uuid)"> \n                                        <ion-icon name="eye-off"></ion-icon>\n                                      </button>\n\n\n            </ion-fab-list>\n          </ion-fab>\n\n          <ion-card-content>\n\n\n\n            <ion-list [hidden]="shownItems[item.uuid] === undefined">\n              <ion-list-header>\n                <h3>\n                  {{ \'formTitles.password\' | translate }}\n                </h3>\n              </ion-list-header>\n              <p style="padding-left: 15px; padding-right: 15px">\n                {{item.password}}\n              </p>\n              <br>\n              <ion-list-header *ngIf="item.twoFactor">\n                <h3>\n                  {{ \'formTitles.twoFactor\' | translate }}\n                </h3>\n                <ion-item style="padding-top: -400px">\n                  <ion-thumbnail item-start>\n                    <img style="width: 200px; height: 200px"\n                         [src]="sanitizer.bypassSecurityTrustUrl(imgs[item.uuid] ? imgs[item.uuid] : \'\')" />\n                  </ion-thumbnail>\n                </ion-item>\n              </ion-list-header>\n            </ion-list>\n\n          </ion-card-content>\n\n          <ion-row>\n            <ion-col col-xs-4\n                     *ngIf="item.twoFactor">\n              <button ion-button\n                      icon-start\n                      clear\n                      small\n                      (click)="copyToClipboard(generateToken(item))">\n                  <ion-icon name="lock"></ion-icon>\n                  <div style = "padding-top: 3px">\n\n                  {{ generateToken(item) }}\n                </div>\n\n                  <circle-progress style = "padding-top: 5px"\n                  [percent]="loadPercentage(timeRemaining)"\n                  title=""\n                  units=\'\'        \n                  [radius]="5"\n                  [animation]="false">\n        \n                </circle-progress>\n\n          </button>\n\n            </ion-col>\n\n            <ion-col col-xs-4>\n              <button ion-button\n                      icon-start\n                      clear\n                      small\n                      (click)="copyToClipboard(item.userName)">\n              <ion-icon name="person"></ion-icon>\n              <div style = "padding-top: 3px">\n\n                  {{ \'formTitles.userName\' | translate }}\n                  </div>\n          </button>\n            </ion-col>\n            <ion-col col-xs-4>\n              <button ion-button\n                      icon-start\n                      clear\n                      small\n                      (click)="copyToClipboard(item.password)">\n              <ion-icon name="hand"></ion-icon>\n              <div style = "padding-top: 3px">\n\n                  {{ \'formTitles.password\' | translate }}\n                  </div>\n          </button>\n            </ion-col>\n\n\n          </ion-row>\n\n\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/accounts/accounts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_keychain_keychain__["a" /* KeychainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* DomSanitizer */]])
    ], AccountsPage);
    return AccountsPage;
}(__WEBPACK_IMPORTED_MODULE_3__secure_items_secure_items__["a" /* SecureItemsPage */]));

//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemEditorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_validation__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_localized_toast_localized_toast__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__password_generator_password_generator__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schema_account__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Edit and add passwords
 */
var ItemEditorPage = /** @class */ (function () {
    /**
     * Intializes EditPasswordPage
     * @param viewCtrl View Controller
     * @param navParams Navigation Parameters
     * @param formBuilder Form Builder
     * @param translate Translation Service
     */
    function ItemEditorPage(viewCtrl, navParams, formBuilder, localizedToastProvider, modalCtrl) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.localizedToastProvider = localizedToastProvider;
        this.modalCtrl = modalCtrl;
        this.item = navParams.get('item');
        this.addItem = navParams.get('addItem');
        this.schema = navParams.get('schema');
        this.validationProvider = new __WEBPACK_IMPORTED_MODULE_3__services_validation_validation__["a" /* ValidationService */](this.schema, this.item);
        this.previousVal = JSON.parse(JSON.stringify(this.item));
        var validators = {};
        __WEBPACK_IMPORTED_MODULE_6__schema_account__["a" /* ACCOUNT_SCHEMA */].properties.password.minLength;
        this.properties = Object.keys(this.schema["properties"]).filter(function (propName) { return !(_this.schema["properties"][propName]["hidden"]); });
        var validatedFields = this.schema['required'].filter(function (propName) { return !(_this.schema["properties"][propName]["hidden"]); });
        this.properties.forEach(function (property) {
            if (!(_this.item[property])) {
                _this.item[property] = "";
            }
            var validationRequirements = (validatedFields.indexOf(property) > -1) ?
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(1)
                ] : [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(0)];
            validators[property] = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose(validationRequirements));
        });
        this.form = formBuilder.group(validators);
    }
    ItemEditorPage.prototype.presentPasswordGenerator = function (id) {
        var _this = this;
        var passwordGenModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__password_generator_password_generator__["a" /* PasswordGeneratorPage */], {});
        passwordGenModal.onDidDismiss(function (genPassword) {
            if (genPassword !== undefined && genPassword !== null) {
                _this.item["password"] = genPassword;
            }
        });
        passwordGenModal.present();
    };
    /**
     * Dismisses Page
     */
    ItemEditorPage.prototype.dismiss = function () {
        if (this.addItem) {
            this.viewCtrl.dismiss();
        }
        else {
            this.viewCtrl.dismiss(this.previousVal);
        }
    };
    /**
     * Dismisses Page
     */
    ItemEditorPage.prototype.save = function () {
        var _this = this;
        this.properties.forEach(function (property) {
            if (_this.item[property] === "") {
                delete _this.item[property];
            }
        });
        if (this.form.valid && this.validationProvider.isValid) {
            this.viewCtrl.dismiss(this.item);
        }
        else {
            this.localizedToastProvider.displayToastFor('validation.invalidForm');
        }
    };
    ItemEditorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-editor',template:/*ion-inline-start:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/item-editor/item-editor.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button\n              (click)="dismiss()">\n          <span ion-text>{{ \'options.close\' | translate }}</span>\n        </button>\n    </ion-buttons>\n    <ion-buttons end>\n\n      <button ion-button\n              (click)="save()"\n              [disabled]="!(form.valid)">\n            <span ion-text>{{ \'options.save\' | translate }}</span>\n          </button>\n    </ion-buttons>\n    <ion-title>{{ addItem ? (\'options.add\' | translate) : (\'options.edit\' | translate) }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form class="form"\n        [formGroup]="form">\n    <ion-item *ngFor="let property of properties">\n      <ion-label floating>{{ \'formTitles.\' + property | translate }}</ion-label>\n      <ion-input *ngIf="property !== \'body\'"\n                 [(ngModel)]="item[property]"\n                 type="text"\n                 [formControlName]="property"></ion-input>\n      <ion-buttons *ngIf="property === \'password\'"\n                   item-end\n                   middle>\n        <button (click)="presentPasswordGenerator(property)"\n                ion-fab\n                mini><ion-icon name="key"></ion-icon></button>\n      </ion-buttons>\n      <ion-textarea *ngIf="property === \'body\'"\n                    rows="8"\n                    [(ngModel)]="item[property]"\n                    type="text"\n                    [formControlName]="property"\n                    required></ion-textarea>\n\n    </ion-item>\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/item-editor/item-editor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_localized_toast_localized_toast__["a" /* LocalizedToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ItemEditorPage);
    return ItemEditorPage;
}());

//# sourceMappingURL=item-editor.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordGeneratorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_password_generator_password_generator__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PasswordGeneratorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordGeneratorPage = /** @class */ (function () {
    function PasswordGeneratorPage(viewCtrl, passwordGenerator) {
        this.viewCtrl = viewCtrl;
        this.passwordGenerator = passwordGenerator;
        this.passwordLength = 20;
        this.options = [__WEBPACK_IMPORTED_MODULE_2__providers_password_generator_password_generator__["b" /* PasswordOption */].numeric, __WEBPACK_IMPORTED_MODULE_2__providers_password_generator_password_generator__["b" /* PasswordOption */].upper, __WEBPACK_IMPORTED_MODULE_2__providers_password_generator_password_generator__["b" /* PasswordOption */].lower, __WEBPACK_IMPORTED_MODULE_2__providers_password_generator_password_generator__["b" /* PasswordOption */].special];
        this.generatedPassword = "";
        this.generatedPassword = this.passwordGenerator.generate(this.passwordLength, this.options);
    }
    PasswordGeneratorPage.prototype.updatePassword = function () {
        this.generatedPassword = this.passwordGenerator.generate(this.passwordLength, this.options);
    };
    /**
     * Dismisses Page
     */
    PasswordGeneratorPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Sets password that was generated
     * @param password Password to set
     */
    PasswordGeneratorPage.prototype.setPassword = function (password) {
        this.viewCtrl.dismiss(password);
    };
    PasswordGeneratorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-generator',template:/*ion-inline-start:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/password-generator/password-generator.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Password Generator</ion-title>\n\n    <ion-buttons start>\n      <button ion-button\n              (click)="dismiss()">\n            <span ion-text>{{ \'options.dismiss\' | translate }}</span>\n          </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button\n              (click)="setPassword(generatedPassword)">\n            <span ion-text>{{ \'options.set\' | translate }}</span>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>{{ \'options.password\' | translate }}</ion-label>\n      <ion-input [(ngModel)]="generatedPassword"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>{{ \'options.options\' | translate }}</ion-label>\n      <ion-select [(ngModel)]="options"\n                  multiple="true"\n                  okText="{{ \'options.ok\' | translate }}"\n                  cancelText="{{ \'options.cancel\' | translate }}"\n                  (ngModelChange)="updatePassword()">\n        <ion-option value="special">{{ \'passwordOptions.special\' | translate }}</ion-option>\n        <ion-option value="numeric">{{ \'passwordOptions.numeric\' | translate }}</ion-option>\n        <ion-option value="upper">{{ \'passwordOptions.upper\' | translate }}</ion-option>\n        <ion-option value="lower">{{ \'passwordOptions.lower\' | translate }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n      <ion-range min="10"\n                 max="35"\n                 (ngModelChange)="updatePassword()"\n                 [(ngModel)]="passwordLength">\n        <ion-label range-left>{{ \'options.length\' | translate }}</ion-label>\n        <ion-label range-right>{{passwordLength}}</ion-label>\n      </ion-range>\n    </ion-item>\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/password-generator/password-generator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_password_generator_password_generator__["a" /* PasswordGeneratorProvider */]])
    ], PasswordGeneratorPage);
    return PasswordGeneratorPage;
}());

//# sourceMappingURL=password-generator.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secure_items_secure_items__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_secure_note__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schema_secure_note__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_keychain_keychain__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_component__ = __webpack_require__(100);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Page for displaying passwords
 */
var SecureNotesPage = /** @class */ (function (_super) {
    __extends(SecureNotesPage, _super);
    /**
     * Intializes __SecureNotesPage__
     * @param modalCtrl Modal Controller
     * @param keychain Keychain Provider
     */
    function SecureNotesPage(modalCtrl, keychain, platform) {
        var _this = _super.call(this, modalCtrl, keychain, __WEBPACK_IMPORTED_MODULE_4__schema_secure_note__["a" /* SECURE_NOTE_SCHEMA */], __WEBPACK_IMPORTED_MODULE_6__app_app_component__["c" /* StorageID */].secureNotes, platform) || this;
        _this.objectDefaults = __WEBPACK_IMPORTED_MODULE_3__types_secure_note__["a" /* SECURE_NOTE_DEFAULT */];
        return _this;
    }
    SecureNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-secure-notes',template:/*ion-inline-start:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/secure-notes/secure-notes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button\n            menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-buttons end\n                 [hidden]="(keychain.storageResp !== 3)">\n      <button ion-button\n              icon-start\n              (click)="addItem()">\n              <ion-icon name="add"></ion-icon>\n          </button>\n    </ion-buttons>\n    <ion-title>{{ \'titles.secureNotes\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid *ngFor="let itemGroupsName of itemGroupsNames(itemGroups)">\n    <h1>\n      {{itemGroupsName}}\n    </h1>\n    <ion-row>\n      <ion-col *ngFor="let item of itemGroups[itemGroupsName]"\n               col-12\n               col-sm-9\n               col-md-6\n               col-lg-4>\n        <ion-card>\n          <ion-item>\n\n            <ion-icon color="primary"\n                      item-start\n                      name="list-box"></ion-icon>\n\n            <h2>{{item.title}}</h2>\n\n          </ion-item>\n\n\n          <ion-fab right\n                   top>\n            <button ion-fab\n                    mini><ion-icon name="key"></ion-icon></button>\n\n            <ion-fab-list style="background-color: white;  box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.1);"\n                          side="left">\n\n\n              <button ion-fab\n                      mini\n                      clear\n                      (click)="deleteItem(item)"> \n                                    <ion-icon name="trash"></ion-icon>\n                              </button>\n              <button ion-fab\n                      clear\n                      (click)="editItem(item)"> \n                                    <ion-icon name="create"></ion-icon>\n                              </button>\n              <button [hidden]="(shownItems[item.uuid] !== undefined)"\n                      ion-fab\n                      mini\n                      clear\n                      (click)="showItem(item.uuid)"> \n                                      <ion-icon name="eye"></ion-icon>\n                                    </button>\n\n              <button [hidden]="(shownItems[item.uuid] === undefined)"\n                      ion-fab\n                      mini\n                      clear\n                      (click)="hideItem(item.uuid)"> \n                                          <ion-icon name="eye-off"></ion-icon>\n                                        </button>\n\n\n            </ion-fab-list>\n          </ion-fab>\n\n          <ion-card-content>\n\n\n            <ion-list [hidden]="shownItems[item.uuid] === undefined">\n              <ion-list-header>\n                <h3>\n                  {{ \'formTitles.body\' | translate }}\n                </h3>\n              </ion-list-header>\n              <p style="white-space: pre-line;padding-left: 15px; padding-right: 15px">\n                {{item.body}}\n              </p>\n              <br>\n            </ion-list>\n\n          </ion-card-content>\n\n          <ion-row>\n\n\n            <ion-col col-lg-4>\n              <button ion-button\n                      icon-start\n                      clear\n                      small\n                      (click)="copyToClipboard(item.body)">\n                <ion-icon name="paper"></ion-icon>\n                <div style = "padding-top: 3px">\n  \n                    {{ \'formTitles.body\' | translate }}\n                    </div>\n            </button>\n\n            </ion-col>\n\n          </ion-row>\n\n\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/secure-notes/secure-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_keychain_keychain__["a" /* KeychainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], SecureNotesPage);
    return SecureNotesPage;
}(__WEBPACK_IMPORTED_MODULE_2__secure_items_secure_items__["a" /* SecureItemsPage */]));

//# sourceMappingURL=secure-notes.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_keychain_keychain__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_localized_toast_localized_toast__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(keychainProvider, localizedToast) {
        this.keychainProvider = keychainProvider;
        this.localizedToast = localizedToast;
        this.oldPass = "";
        this.newPass = "";
        this.confPass = "";
    }
    /**
     * Changes language of App
     */
    SettingsPage.prototype.changePassword = function (oldPass, newPass) {
        var _this = this;
        this.keychainProvider.changePassphrase(oldPass, newPass).then(function (resp) {
            if (resp === __WEBPACK_IMPORTED_MODULE_1__providers_keychain_keychain__["b" /* StorageResponse */].SUCCESS) {
                _this.localizedToast.displayToastFor("validation.successPassChange");
                _this.oldPass = "";
                _this.newPass = "";
                _this.confPass = "";
            }
            else {
                _this.localizedToast.displayToastFor("validation.failedPassChange");
            }
        });
    };
    SettingsPage.prototype.removeKeychain = function () {
        this.keychainProvider.removeKeychain();
        location.reload();
    };
    SettingsPage.prototype.exportKeychain = function () {
        this.keychainProvider.exportKeychain();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button\n            menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n    <ion-title>{{ \'titles.settings\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-list-header>\n      <h1>\n        {{ \'options.changePassword\' | translate }}\n      </h1>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>{{ \'options.passwordOld\' | translate }}</ion-label>\n      <ion-input [(ngModel)]="oldPass"\n                 type="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{ \'options.passwordNew\' | translate }}</ion-label>\n      <ion-input [(ngModel)]="newPass"\n                 type="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{ \'options.confirm\' | translate }}</ion-label>\n      <ion-input [(ngModel)]="confPass"\n                 type="password"></ion-input>\n    </ion-item>\n\n    <br>\n\n    <button (click)="changePassword(oldPass,newPass)"\n            [disabled]="!(oldPass !== \'\' && newPass !== \'\' && newPass === confPass)"\n            ion-button\n            block>{{ \'options.changePassword\' | translate }}</button>\n    <br>\n\n    <button (click)="removeKeychain()"\n            ion-button\n            block>{{ \'options.removeKeychain\' | translate }}</button>\n    \n    <br>\n\n    <button (click)="exportKeychain()"\n            ion-button\n            block>{{ \'options.exportKeychain\' | translate }}</button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_keychain_keychain__["a" /* KeychainProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_localized_toast_localized_toast__["a" /* LocalizedToastProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_keychain_keychain__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticatePage = /** @class */ (function () {
    /**
     * Intializes EditPasswordPage
     * @param viewCtrl View Controller
     * @param navParams Navigation Parameters
     */
    function AuthenticatePage(keychainProvider, viewCtrl, navParams) {
        this.keychainProvider = keychainProvider;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        /**
         * Passphrase to authenticate
         */
        this.passphrase = "";
    }
    /**
     * Passes Passphrase to keychain
     */
    AuthenticatePage.prototype.passKeychain = function () {
        this.viewCtrl.dismiss(this.passphrase);
    };
    /**
     * Removes Keychain
     */
    AuthenticatePage.prototype.removeKeychain = function () {
        this.keychainProvider.removeKeychain();
        location.reload();
    };
    AuthenticatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authenticate',template:/*ion-inline-start:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/authenticate/authenticate.html"*/'<!--\n  Generated template for the AuthenticatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n      <button ion-button\n              (click)="removeKeychain()">\n            <p ion-text>{{ \'options.remove\' | translate }}</p>\n          </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button\n              (click)="passKeychain()"\n              [disabled]="passphrase.length === 0">\n            <span ion-text>{{ \'options.unlock\' | translate }}</span>\n          </button>\n    </ion-buttons>\n    <ion-title>Unlock Keychain</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Passphrase</ion-label>\n      <ion-input type="password"\n                 [(ngModel)]="passphrase"></ion-input>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/authenticate/authenticate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_keychain_keychain__["a" /* KeychainProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AuthenticatePage);
    return AuthenticatePage;
}());

//# sourceMappingURL=authenticate.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewKeychainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crypto_crypto__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_keychain__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NewKeychainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewKeychainPage = /** @class */ (function () {
    function NewKeychainPage(viewCtrl, crypto, storage) {
        this.viewCtrl = viewCtrl;
        this.crypto = crypto;
        this.storage = storage;
        this.passphrase = "";
    }
    NewKeychainPage.prototype.createKeychain = function (passphrase) {
        var _this = this;
        this.crypto.encryptObjectFromPhrase(passphrase, __WEBPACK_IMPORTED_MODULE_3__types_keychain__["a" /* KEYCHAIN_DEFAULT */]).then(function (encrypted) {
            _this.viewCtrl.dismiss(encrypted);
        });
    };
    NewKeychainPage.prototype.importKeychain = function (file) {
        if (file['path']) {
            this.storage.set('keychainFilePath', file['path']);
        }
        var reader = new FileReader();
        reader.readAsText(file);
        var viewCtrl = this.viewCtrl;
        reader.onload = function () {
            viewCtrl.dismiss(reader.result);
        };
    };
    NewKeychainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-keychain',template:/*ion-inline-start:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/new-keychain/new-keychain.html"*/'<!--\n  Generated template for the AuthenticatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Configure Keychain</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-label>\n      <h3 style="text-align: center">Create Keychain</h3>\n    </ion-label>\n    <ion-item>\n      <ion-label floating>Passphrase</ion-label>\n      <ion-input type="password"\n                 [(ngModel)]="passphrase"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <button (click)="createKeychain(passphrase)"\n              [disabled]="passphrase.length === 0"\n              ion-button\n              full>Create</button>\n    </ion-item>\n\n    <br>\n\n    <ion-label>\n      <h5 style="text-align: center">OR</h5>\n    </ion-label>\n\n    <br>\n\n    <ion-label>\n      <h3 style="text-align: center">Import Keychain</h3>\n    </ion-label>\n\n    <ion-item>\n      <label for="file-upload"\n             ion-button\n             full>\n            Import\n         </label>\n      <input (change)="importKeychain($event.target.files[0])"\n             id="file-upload"\n             accept=".kk"\n             type="file" />\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/afshawnlotfi/Documents/krossykey/krossykey/src/pages/new-keychain/new-keychain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_crypto_crypto__["a" /* CryptoProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], NewKeychainPage);
    return NewKeychainPage;
}());

//# sourceMappingURL=new-keychain.js.map

/***/ }),

/***/ 223:
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
webpackEmptyAsyncContext.id = 223;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accounts/accounts.module": [
		934,
		6
	],
	"../pages/authenticate/authenticate.module": [
		935,
		5
	],
	"../pages/item-editor/item-editor.module": [
		936,
		4
	],
	"../pages/new-keychain/new-keychain.module": [
		937,
		3
	],
	"../pages/password-generator/password-generator.module": [
		938,
		2
	],
	"../pages/secure-notes/secure-notes.module": [
		939,
		1
	],
	"../pages/settings/settings.module": [
		940,
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
webpackAsyncContext.id = 267;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KeychainAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clipboard_polyfill__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clipboard_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_clipboard_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_editor_item_editor__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_hash__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_object_hash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_object_hash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_keychain_keychain__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authenticate_authenticate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_keychain_new_keychain__ = __webpack_require__(213);






var KeychainAction;
(function (KeychainAction) {
    KeychainAction[KeychainAction["EDIT"] = 0] = "EDIT";
    KeychainAction[KeychainAction["ADD"] = 1] = "ADD";
    KeychainAction[KeychainAction["DELETE"] = 2] = "DELETE";
    KeychainAction[KeychainAction["READ"] = 3] = "READ";
})(KeychainAction || (KeychainAction = {}));
var SecureItemsPage = /** @class */ (function () {
    /**
     * Intializes __PasswordsPage__
     * @param modalCtrl Modal Controller
     * @param keychain Keychain Provider
     * @param schema Validation Schema
     * @param storageID Storage ID
     */
    function SecureItemsPage(modalCtrl, keychain, schema, storageID, platform) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.keychain = keychain;
        this.schema = schema;
        this.storageID = storageID;
        this.platform = platform;
        /**
         * Items being shown
         */
        this.shownItems = {};
        this.isAuthenticating = false;
        this.itemGroups = {};
        /**
         * Raw items
         */
        this.rawItems = [];
        this.platform.ready().then(function () {
            _this.authenticate(KeychainAction.READ);
            _this.platform.pause.subscribe(function () {
                _this.clearKeychainData();
            });
        });
    }
    SecureItemsPage.prototype.clearKeychainData = function () {
        this.keychain.removePassphraseSecurely();
        this.rawItems = [];
        this.itemGroups = {};
        if (!(this.isAuthenticating)) {
            this.authenticate(KeychainAction.READ);
        }
    };
    SecureItemsPage.prototype.authenticate = function (keychainAction, item) {
        var _this = this;
        this.keychain.keychainIsEmpty().then(function (isEmpty) {
            if (!(isEmpty)) {
                var afterUnlock_1 = function (passphrase) {
                    _this.isAuthenticating = true;
                    if (passphrase !== undefined && passphrase !== null) {
                        var keychainUnlocked = _this.keychain.unlockKeychain(passphrase);
                        return keychainUnlocked.then(function (isValid) {
                            if (isValid === __WEBPACK_IMPORTED_MODULE_3__providers_keychain_keychain__["b" /* StorageResponse */].SUCCESS) {
                                _this.keychain.getKeychain(_this.storageID, passphrase).then(function (rawItems) {
                                    if (item) {
                                        switch (keychainAction) {
                                            case KeychainAction.ADD:
                                                _this.rawItems = rawItems;
                                                _this.rawItems.push(item);
                                                _this.keychain.setKeychainProperty(passphrase, _this.storageID, _this.rawItems);
                                                break;
                                            case KeychainAction.EDIT:
                                                _this.rawItems = rawItems.filter(function (filtered) { return filtered.uuid !== item.uuid; });
                                                _this.rawItems.push(item);
                                                _this.keychain.setKeychainProperty(passphrase, _this.storageID, _this.rawItems);
                                                break;
                                            case KeychainAction.DELETE:
                                                _this.rawItems = _this.rawItems.filter(function (filtered) { return filtered.uuid !== item.uuid; });
                                                _this.keychain.setKeychainProperty(passphrase, _this.storageID, _this.rawItems);
                                                break;
                                            default:
                                                break;
                                        }
                                        _this.keychain.storePassphraseSecurely(passphrase);
                                        _this.itemGroups = _this.getItemGroups(_this.rawItems);
                                    }
                                    else {
                                        if (keychainAction === KeychainAction.READ) {
                                            _this.rawItems = rawItems;
                                            _this.keychain.storePassphraseSecurely(passphrase);
                                            _this.itemGroups = _this.getItemGroups(_this.rawItems);
                                        }
                                    }
                                });
                            }
                            else {
                                _this.keychain.removePassphraseSecurely();
                                _this.authenticate(keychainAction, item);
                            }
                        });
                    }
                };
                _this.keychain.fetchPassphraseSecurely().then(function (passphraseFromStorage) {
                    if (passphraseFromStorage !== null && passphraseFromStorage !== undefined) {
                        afterUnlock_1(passphraseFromStorage);
                    }
                    else {
                        var authenticateModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__authenticate_authenticate__["a" /* AuthenticatePage */], {}, { enableBackdropDismiss: false });
                        authenticateModal.onDidDismiss(function (passphrase) {
                            afterUnlock_1(passphrase);
                            _this.isAuthenticating = false;
                        });
                        authenticateModal.present();
                    }
                });
            }
            else {
                _this.configureKeychain();
            }
        });
    };
    SecureItemsPage.prototype.configureKeychain = function () {
        var _this = this;
        var importModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__new_keychain_new_keychain__["a" /* NewKeychainPage */], {}, { enableBackdropDismiss: false });
        importModal.onDidDismiss(function (encrypted) {
            if (encrypted !== undefined && encrypted !== null) {
                _this.keychain.setRawKeychain(encrypted).then(function () {
                    _this.authenticate(KeychainAction.READ);
                    _this.isAuthenticating = false;
                });
            }
        });
        importModal.present();
    };
    /**
     * Sorts items by url
     * @param items All Items
     */
    SecureItemsPage.prototype.getItemGroups = function (items) {
        var itemGroups = {};
        items.forEach(function (item) {
            if (itemGroups[item.url]) {
                itemGroups[item.url].push(item);
            }
            else {
                itemGroups[item.url] = [];
                itemGroups[item.url].push(item);
            }
        });
        return itemGroups;
    };
    /**
     * Gets all item groups
     * @param itemGroups Item groups
     */
    SecureItemsPage.prototype.itemGroupsNames = function (itemGroups) {
        return Object.keys(itemGroups);
    };
    /**
     * Shows a specific item
     * @param uuid UUID of item
     */
    SecureItemsPage.prototype.showItem = function (uuid) {
        this.shownItems[uuid] = null;
    };
    /**
     * Hides a specific item
     * @param uuid UUID of item
     */
    SecureItemsPage.prototype.hideItem = function (uuid) {
        delete this.shownItems[uuid];
    };
    /**
     * Copies string to clipboard
     * @param stringToCopy String to copy
     */
    SecureItemsPage.prototype.copyToClipboard = function (stringToCopy) {
        __WEBPACK_IMPORTED_MODULE_0_clipboard_polyfill___default.a.writeText(stringToCopy);
    };
    /**
     * Edits item
     * @param item __Identified<T>__
     */
    SecureItemsPage.prototype.editItem = function (item) {
        var _this = this;
        var oldChecksum = __WEBPACK_IMPORTED_MODULE_2_object_hash___default()(item);
        var editModal = this.modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_1__item_editor_item_editor__["a" /* ItemEditorPage */], { item: JSON.parse(JSON.stringify(item)), addItem: false, schema: this.schema });
        editModal.onDidDismiss(function (newItem) {
            if (newItem !== undefined && newItem !== null) {
                var newChecksum = __WEBPACK_IMPORTED_MODULE_2_object_hash___default()(newItem);
                if (oldChecksum !== newChecksum) {
                    _this.authenticate(KeychainAction.EDIT, newItem);
                }
            }
        });
        editModal.present();
    };
    /**
     * Delete item
     * @param uuid Identifier of item
     */
    SecureItemsPage.prototype.deleteItem = function (item) {
        this.authenticate(KeychainAction.DELETE, item);
    };
    /**
     * Adds item
     */
    SecureItemsPage.prototype.addItem = function () {
        var _this = this;
        var date = new Date();
        var epoch = date.getTime();
        var uuid = __WEBPACK_IMPORTED_MODULE_2_object_hash___default()(epoch + "com.krossykey.identifier");
        var defaults = JSON.parse(JSON.stringify(this.objectDefaults));
        defaults.uuid = uuid;
        var editModal = this.modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_1__item_editor_item_editor__["a" /* ItemEditorPage */], { item: defaults, addItem: true, schema: this.schema });
        editModal.onDidDismiss(function (newItem) {
            if (newItem !== undefined && newItem !== null && (_this.rawItems.filter(function (filtered) { return filtered.uuid === newItem.uuid; }).length === 0)) {
                _this.authenticate(KeychainAction.ADD, newItem);
            }
        });
        editModal.present();
    };
    return SecureItemsPage;
}());

//# sourceMappingURL=secure-items.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ajv__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ajv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ajv__);

var ValidationService = /** @class */ (function () {
    function ValidationService(schema, data) {
        this.schema = schema;
        this.data = data;
        var ajv = new __WEBPACK_IMPORTED_MODULE_0_ajv___default.a(); // options can be passed, e.g. {allErrors: true}
        this.validate = ajv.compile(schema);
    }
    Object.defineProperty(ValidationService.prototype, "isValid", {
        get: function () {
            this.validate(this.data);
            return this.validate(this.data);
        },
        enumerable: true,
        configurable: true
    });
    ValidationService.prototype.validateFor = function (data) {
        this.validate(data);
        return this.validate(data);
    };
    return ValidationService;
}());

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PasswordOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordGeneratorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PasswordOption;
(function (PasswordOption) {
    PasswordOption["special"] = "special";
    PasswordOption["numeric"] = "numeric";
    PasswordOption["upper"] = "upper";
    PasswordOption["lower"] = "lower";
})(PasswordOption || (PasswordOption = {}));
/**
 * Generates randomly generated password
 */
var PasswordGeneratorProvider = /** @class */ (function () {
    function PasswordGeneratorProvider() {
    }
    PasswordGeneratorProvider.prototype.generate = function (length, options) {
        var password = "";
        var passwordSelectionArray = [];
        if (options.indexOf(PasswordOption.upper) > -1) {
            var alpha = this.asciiArrayGenerator([
                { start: 65, length: 26 }
            ]);
            passwordSelectionArray = passwordSelectionArray.concat(alpha);
        }
        if (options.indexOf(PasswordOption.lower) > -1) {
            var alpha = this.asciiArrayGenerator([
                { start: 97, length: 26 }
            ]);
            passwordSelectionArray = passwordSelectionArray.concat(alpha);
        }
        if (options.indexOf(PasswordOption.numeric) > -1) {
            var numbers = this.asciiArrayGenerator([{ start: 48, length: 10 }]);
            passwordSelectionArray = passwordSelectionArray.concat(numbers);
        }
        if (options.indexOf(PasswordOption.special) > -1) {
            var specialChar = this.asciiArrayGenerator([
                { start: 58, length: 7 },
                { start: 33, length: 15 },
                { start: 91, length: 6 }
            ]);
            passwordSelectionArray = passwordSelectionArray.concat(specialChar);
        }
        while (password.length < length) {
            password += passwordSelectionArray[Math.ceil((passwordSelectionArray.length - 1) * Math.random())];
        }
        return password;
    };
    /**
     * Stitches ascii characters together in array
     * @param ranges Ranges of ascii to stitch together
     */
    PasswordGeneratorProvider.prototype.asciiArrayGenerator = function (ranges) {
        var array = [];
        ranges.forEach(function (range) {
            var characters = Array.from({ length: range.length }, function (_, k) { return String.fromCharCode(k + range.start); });
            array = array.concat(characters);
        });
        return array;
    };
    PasswordGeneratorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], PasswordGeneratorProvider);
    return PasswordGeneratorProvider;
}());

//# sourceMappingURL=password-generator.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KEYCHAIN_DEFAULT; });
var KEYCHAIN_DEFAULT = {
    accounts: [],
    secureNotes: [],
};
//# sourceMappingURL=keychain.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECURE_NOTE_SCHEMA; });
var SECURE_NOTE_SCHEMA = {
    type: "object",
    properties: {
        title: {
            type: "string",
            minLength: 1
        },
        body: {
            type: "string",
            minLength: 1
        },
        url: {
            type: "string",
            minLength: 1
        },
        uuid: {
            type: "string",
            minLength: 1,
            hidden: true
        }
    },
    additionalProperties: false,
    required: ["title", "body", "url", "uuid"]
};
//# sourceMappingURL=secure-note.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(456);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export createTranslateLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_secure_notes_secure_notes__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_item_editor_item_editor__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_circle_progress__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_keychain_keychain__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_localized_toast_localized_toast__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_authenticate_authenticate__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_crypto_crypto__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_new_keychain_new_keychain__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_secure_storage__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_password_generator_password_generator__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_password_generator_password_generator__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_accounts_accounts__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_secure_notes_secure_notes__["a" /* SecureNotesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_item_editor_item_editor__["a" /* ItemEditorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_authenticate_authenticate__["a" /* AuthenticatePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_new_keychain_new_keychain__["a" /* NewKeychainPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_password_generator_password_generator__["a" /* PasswordGeneratorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'krossykey',
                    driverOrder: ['sqlite', 'indexedb', 'websql', "localstorage"]
                }),
                __WEBPACK_IMPORTED_MODULE_11_ng_circle_progress__["a" /* NgCircleProgressModule */].forRoot({
                    // set defaults here
                    outerStrokeWidth: 2,
                    innerStrokeWidth: 2,
                    showSubtitle: false,
                    outerStrokeColor: "#488aff",
                    innerStrokeColor: "rgba(0,0,0,0)",
                    titleFontSize: "10",
                    animationDuration: 300,
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], {}, {
                    links: [
                        { loadChildren: '../pages/accounts/accounts.module#AccountsPageModule', name: 'AccountsPage', segment: 'accounts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authenticate/authenticate.module#AuthenticatePageModule', name: 'AuthenticatePage', segment: 'authenticate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-editor/item-editor.module#EditPasswordPageModule', name: 'ItemEditorPage', segment: 'item-editor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-keychain/new-keychain.module#NewKeychainPageModule', name: 'NewKeychainPage', segment: 'new-keychain', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password-generator/password-generator.module#PasswordGeneratorPageModule', name: 'PasswordGeneratorPage', segment: 'password-generator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/secure-notes/secure-notes.module#SecureNotesPageModule', name: 'SecureNotesPage', segment: 'secure-notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_secure_notes_secure_notes__["a" /* SecureNotesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_item_editor_item_editor__["a" /* ItemEditorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_authenticate_authenticate__["a" /* AuthenticatePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_new_keychain_new_keychain__["a" /* NewKeychainPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_password_generator_password_generator__["a" /* PasswordGeneratorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_secure_storage__["a" /* SecureStorage */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_keychain_keychain__["a" /* KeychainProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_localized_toast_localized_toast__["a" /* LocalizedToastProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_crypto_crypto__["a" /* CryptoProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_password_generator_password_generator__["a" /* PasswordGeneratorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCOUNT_DEFAULT; });
/**
 * Password model default
 */
var ACCOUNT_DEFAULT = {
    title: "",
    userName: "",
    password: "",
    url: "",
    twoFactor: "",
    uuid: ""
};
//# sourceMappingURL=account.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KEYCHAIN_SCHEMA; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__secure_note__ = __webpack_require__(279);


var KEYCHAIN_SCHEMA = {
    type: "object",
    properties: {
        accounts: {
            type: "array",
            validateAllForSchema: __WEBPACK_IMPORTED_MODULE_0__account__["a" /* ACCOUNT_SCHEMA */]
        },
        secureNotes: {
            type: "array",
            validateAllForSchema: __WEBPACK_IMPORTED_MODULE_1__secure_note__["a" /* SECURE_NOTE_SCHEMA */]
        },
    },
    additionalProperties: false,
    required: ["accounts", "secureNotes"]
};
//# sourceMappingURL=keychain.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECURE_NOTE_DEFAULT; });
/**
 * Secure note model defualt
 */
var SECURE_NOTE_DEFAULT = {
    title: "",
    body: "",
    url: "",
    uuid: ""
};
//# sourceMappingURL=secure-note.js.map

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StorageResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeychainProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_keychain__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_validation__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schema_keychain__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localized_toast_localized_toast__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crypto_crypto__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_secure_storage__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_downloadjs__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_downloadjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_downloadjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Storage Response
 */
var StorageResponse;
(function (StorageResponse) {
    StorageResponse[StorageResponse["INVALID_KEYCHAIN"] = 0] = "INVALID_KEYCHAIN";
    StorageResponse[StorageResponse["INVALID_PASSCODE"] = 1] = "INVALID_PASSCODE";
    StorageResponse[StorageResponse["KEYCHAIN_NOT_SET"] = 2] = "KEYCHAIN_NOT_SET";
    StorageResponse[StorageResponse["SUCCESS"] = 3] = "SUCCESS";
})(StorageResponse || (StorageResponse = {}));
/*
  Reads password from database
*/
var KeychainProvider = /** @class */ (function () {
    function KeychainProvider(storage, localizedToast, crypto, secureStorage, platform) {
        var _this = this;
        this.storage = storage;
        this.localizedToast = localizedToast;
        this.crypto = crypto;
        this.secureStorage = secureStorage;
        this.platform = platform;
        this._storageResp = StorageResponse.SUCCESS;
        this.platform.ready().then(function () {
            if (__WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */].mode === __WEBPACK_IMPORTED_MODULE_6__app_app_component__["b" /* Mode */].mobile) {
                _this.secureDatabase = _this.secureStorage.create('krossykey');
            }
            _this.keychainValidator = new __WEBPACK_IMPORTED_MODULE_3__services_validation_validation__["a" /* ValidationService */](__WEBPACK_IMPORTED_MODULE_4__schema_keychain__["a" /* KEYCHAIN_SCHEMA */], _this._keychain);
        });
    }
    Object.defineProperty(KeychainProvider.prototype, "storageResp", {
        /**
         * Descibes Whether keychain is valid
         */
        get: function () {
            return this._storageResp;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets keychain to default when keychain is invalid
     */
    KeychainProvider.prototype.invalidKeychain = function () {
        this._keychain = __WEBPACK_IMPORTED_MODULE_1__types_keychain__["a" /* KEYCHAIN_DEFAULT */];
        this.localizedToast.displayToastFor('validation.invalidKeychain');
        this._storageResp = StorageResponse.INVALID_KEYCHAIN;
    };
    /**
     * Resets keychain to default when keychain is invalid
     */
    KeychainProvider.prototype.invalidPassphrase = function () {
        this._keychain = __WEBPACK_IMPORTED_MODULE_1__types_keychain__["a" /* KEYCHAIN_DEFAULT */];
        this.localizedToast.displayToastFor('validation.invalidPassphrase');
        this._storageResp = StorageResponse.INVALID_PASSCODE;
    };
    KeychainProvider.prototype.storePassphraseSecurely = function (passphrase) {
        if (__WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */].mode === __WEBPACK_IMPORTED_MODULE_6__app_app_component__["b" /* Mode */].desktop) {
            //--[electron_build] const keytar = require('keytar')
            //--[electron_build] keytar.setPassword('krossykey','krossykeytoken',passphrase)
        }
        else if (__WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */].mode === __WEBPACK_IMPORTED_MODULE_6__app_app_component__["b" /* Mode */].mobile) {
            return this.secureDatabase.then(function (secureStorage) {
                return secureStorage.set('krossykey', passphrase)
                    .then(function () { return true; }, function () { return false; });
            });
        }
    };
    KeychainProvider.prototype.removePassphraseSecurely = function () {
        if (__WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */].mode === __WEBPACK_IMPORTED_MODULE_6__app_app_component__["b" /* Mode */].desktop) {
            //--[electron_build] const keytar = require('keytar')
            //--[electron_build] return keytar.deletePassword('krossykey','krossykeytoken')
        }
        else if (__WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */].mode === __WEBPACK_IMPORTED_MODULE_6__app_app_component__["b" /* Mode */].mobile) {
            return this.secureDatabase.then(function (secureStorage) {
                return secureStorage.remove('krossykey')
                    .then(function () { return true; }, function () { return false; });
            });
        }
        else {
            return this.storage.remove('krossykey').then(function () { return true; }, function () { return false; });
        }
    };
    KeychainProvider.prototype.fetchPassphraseSecurely = function () {
        if (__WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */].mode === __WEBPACK_IMPORTED_MODULE_6__app_app_component__["b" /* Mode */].desktop) {
            //--[electron_build] const keytar = require('keytar')
            //--[electron_build] return keytar.getPassword('krossykey','krossykeytoken')
        }
        else if (__WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */].mode === __WEBPACK_IMPORTED_MODULE_6__app_app_component__["b" /* Mode */].mobile) {
            return this.secureDatabase.then(function (secureStorage) {
                return secureStorage.get('krossykey')
                    .then(function (passphrase) { return passphrase; }, function () { return null; });
            });
        }
        else {
            return this.storage.get('krossykey').then(function (passphrase) {
                return passphrase;
            });
        }
    };
    KeychainProvider.prototype.changePassphrase = function (passphrase, newPassphrase) {
        var _this = this;
        return this.unlockKeychain(passphrase).then(function (resp) {
            if (resp === StorageResponse.SUCCESS) {
                _this.lockKeychain(newPassphrase);
            }
            return resp;
        });
    };
    /**
     * Unlocks keychain
     * @param passphrase Passphrase to unlock with
     */
    KeychainProvider.prototype.unlockKeychain = function (passphrase) {
        var _this = this;
        return this.getRawKeychain().then(function (encrypted) {
            if (encrypted) {
                var decrypted = _this.crypto.decryptStringFromPhrase(passphrase, encrypted);
                if (decrypted) {
                    return decrypted.then(function (keychain) {
                        if (keychain) {
                            if (_this.keychainValidator.validateFor(keychain)) {
                                _this._storageResp = StorageResponse.SUCCESS;
                                _this._keychain = keychain;
                            }
                            else {
                                _this.invalidKeychain();
                            }
                        }
                        else {
                            _this.invalidPassphrase();
                        }
                        return _this._storageResp;
                    });
                }
                else {
                    _this.invalidKeychain();
                    return _this._storageResp;
                }
            }
            else {
                _this._storageResp = StorageResponse.KEYCHAIN_NOT_SET;
                _this._keychain = __WEBPACK_IMPORTED_MODULE_1__types_keychain__["a" /* KEYCHAIN_DEFAULT */];
                return _this.crypto.encryptObjectFromPhrase(passphrase, _this._keychain).then(function (encrypted) {
                    _this.setRawKeychain(encrypted);
                    return _this._storageResp;
                });
            }
        });
    };
    /**
     * Locks Keychain
     * @param passphrase Passphrase to lock with
     */
    KeychainProvider.prototype.lockKeychain = function (passphrase) {
        var _this = this;
        this.crypto.encryptObjectFromPhrase(passphrase, this._keychain).then(function (encrypted) {
            _this.setRawKeychain(encrypted);
        });
        this._keychain = null;
    };
    KeychainProvider.prototype.getKeychain = function (storageID, passphrase) {
        var _this = this;
        return this.getRawKeychain().then(function (encrypted) {
            return _this.crypto.decryptStringFromPhrase(passphrase, encrypted).then(function (decrypted) {
                return decrypted[storageID];
            });
        });
    };
    KeychainProvider.prototype.setKeychainProperty = function (passphrase, storageID, identified) {
        var _this = this;
        this._keychain[storageID] = identified;
        this.crypto.encryptObjectFromPhrase(passphrase, this._keychain).then(function (encrypted) {
            _this.setRawKeychain(encrypted);
        });
    };
    KeychainProvider.prototype.setKeychain = function (passphrase, keychain) {
        var _this = this;
        this.crypto.encryptObjectFromPhrase(passphrase, keychain).then(function (encrypted) {
            _this.setRawKeychain(encrypted);
        });
    };
    KeychainProvider.prototype.keychainIsEmpty = function () {
        var _this = this;
        return this.getRawKeychain().then(function (encrypted) {
            if (encrypted) {
                return false;
            }
            else {
                _this._storageResp = StorageResponse.KEYCHAIN_NOT_SET;
                return true;
            }
        });
    };
    KeychainProvider.prototype.setKeychainPath = function (path) {
        return this.storage.set('keychainFilePath', path);
    };
    KeychainProvider.prototype.deleteKeychainPath = function () {
        this.storage.remove('keychainFilePath');
    };
    KeychainProvider.prototype.removeKeychain = function () {
        //For Browsers
        this.deleteKeychainPath();
        this.storage.remove('keychain');
    };
    KeychainProvider.prototype.exportKeychain = function () {
        //For Browsers
        this.getRawKeychain().then(function (keychain) {
            __WEBPACK_IMPORTED_MODULE_10_downloadjs___default()(keychain, "keychain.kk", "text/plain");
        });
    };
    KeychainProvider.prototype.getKeychainPath = function () {
        return this.storage.get('keychainFilePath');
    };
    KeychainProvider.prototype.setRawKeychain = function (rawKeychain) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */].mode === __WEBPACK_IMPORTED_MODULE_6__app_app_component__["b" /* Mode */].desktop) {
            return this.getKeychainPath().then(function (path) {
                //--[electron_build] const fs = require('fs');
                if (path) {
                    //--[electron_build] fs.writeFile(path, rawKeychain);
                }
                else {
                    //--[electron_build] const {dialog} = require("electron").remote;
                    //--[electron_build] var savePath = dialog.showSaveDialog({defaultPath : "~/keychain.kk"});
                    //--[electron_build] path = savePath
                    //--[electron_build] fs.writeFile(savePath, rawKeychain)
                    return _this.setKeychainPath(path);
                }
            });
        }
        else {
            return this.storage.set('keychain', rawKeychain);
        }
    };
    KeychainProvider.prototype.getRawKeychain = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */].mode === __WEBPACK_IMPORTED_MODULE_6__app_app_component__["b" /* Mode */].desktop) {
            return this.getKeychainPath().then(function (path) {
                if (path) {
                    //--[electron_build] const fs = require('fs');
                    try {
                        //--[electron_build] return fs.readFileSync(path)
                    }
                    catch (_a) {
                        _this.deleteKeychainPath();
                        return undefined;
                    }
                }
                else {
                    return undefined;
                }
            });
        }
        else {
            return this.storage.get('keychain');
        }
    };
    KeychainProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__localized_toast_localized_toast__["a" /* LocalizedToastProvider */],
            __WEBPACK_IMPORTED_MODULE_7__crypto_crypto__["a" /* CryptoProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_secure_storage__["a" /* SecureStorage */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["h" /* Platform */]])
    ], KeychainProvider);
    return KeychainProvider;
}());

//# sourceMappingURL=keychain.js.map

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizedToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LocalizedToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocalizedToastProvider = /** @class */ (function () {
    function LocalizedToastProvider(translate, toastCtrl) {
        this.translate = translate;
        this.toastCtrl = toastCtrl;
    }
    LocalizedToastProvider.prototype.displayToastFor = function (i18n) {
        var _this = this;
        this.translate.get(i18n).subscribe(function (res) {
            var toast = _this.toastCtrl.create({
                message: res,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    LocalizedToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], LocalizedToastProvider);
    return LocalizedToastProvider;
}());

//# sourceMappingURL=localized-toast.js.map

/***/ })

},[451]);
//# sourceMappingURL=main.js.map