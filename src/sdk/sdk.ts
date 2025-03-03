/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { Dataset } from "./dataset";
import { Element } from "./element";
import { Generation } from "./generation";
import { InitImage } from "./initimage";
import { Model } from "./model";
import { Prompt } from "./prompt";
import { User } from "./user";
import { Variation } from "./variation";

export class Leonardo extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    private _dataset?: Dataset;
    get dataset() {
        return (this._dataset ??= new Dataset(this.options$));
    }

    private _element?: Element;
    get element() {
        return (this._element ??= new Element(this.options$));
    }

    private _generation?: Generation;
    get generation() {
        return (this._generation ??= new Generation(this.options$));
    }

    private _initImage?: InitImage;
    get initImage() {
        return (this._initImage ??= new InitImage(this.options$));
    }

    private _user?: User;
    get user() {
        return (this._user ??= new User(this.options$));
    }

    private _model?: Model;
    get model() {
        return (this._model ??= new Model(this.options$));
    }

    private _prompt?: Prompt;
    get prompt() {
        return (this._prompt ??= new Prompt(this.options$));
    }

    private _variation?: Variation;
    get variation() {
        return (this._variation ??= new Variation(this.options$));
    }
}
