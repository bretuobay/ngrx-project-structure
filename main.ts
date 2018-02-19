import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CaasAppModule }  from './caas-app.module';
import { AppSettings
    , APP_SETTINGS 
} from '../Common';

import { environment } from '../environments/environment';
import { CaasAppServiceConfig } from './services/caas-app.service.cfg';

if (environment.production) {
    enableProdMode();
}

export function init(appSettings: AppSettings) {
    platformBrowserDynamic([{
        provide: APP_SETTINGS, useValue: appSettings
    }, {
        provide: 'ServicesFramework', useValue: appSettings.ServicesFramework
    }
    ,{
         provide: 'CaasAppServiceConfig', useValue: CaasAppServiceConfig
    }
    ]).bootstrapModule(CaasAppModule)
       .catch((err) => console.error(err));
}


window['CaasApp'] = {init:  init};