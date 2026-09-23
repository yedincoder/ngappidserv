export namespace main {
	
	export class Config {
	    php: string;
	    mysql: string;
	    web_port: number;
	    db_port: number;
	    pgsql_port: number;
	    redis_port: number;
	    mailpit_port: number;
	    db_manager: string;
	
	    static createFrom(source: any = {}) {
	        return new Config(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.php = source["php"];
	        this.mysql = source["mysql"];
	        this.web_port = source["web_port"];
	        this.db_port = source["db_port"];
	        this.pgsql_port = source["pgsql_port"];
	        this.redis_port = source["redis_port"];
	        this.mailpit_port = source["mailpit_port"];
	        this.db_manager = source["db_manager"];
	    }
	}
	export class InstallData {
	    appName: string;
	    projectName: string;
	
	    static createFrom(source: any = {}) {
	        return new InstallData(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.appName = source["appName"];
	        this.projectName = source["projectName"];
	    }
	}
	export class TunnelData {
	    domain: string;
	    port: any;
	
	    static createFrom(source: any = {}) {
	        return new TunnelData(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.domain = source["domain"];
	        this.port = source["port"];
	    }
	}
	export class TunnelResult {
	    success: boolean;
	    url: string;
	    msg: string;
	
	    static createFrom(source: any = {}) {
	        return new TunnelResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.success = source["success"];
	        this.url = source["url"];
	        this.msg = source["msg"];
	    }
	}

}

