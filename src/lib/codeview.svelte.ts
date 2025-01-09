class Codeview {

    private static instance: Codeview;

    private _activeTab: 'preview' | 'code' = $state('preview');
    private _isDarkMode: boolean = $state(false);
    private _isCopied: { status: boolean; timestamp: number } = $state({ status: false, timestamp: 0 });
    private _code: string = $state('');
    private _language: string = $state('');


    static getInstance(): Codeview {
        if (!Codeview.instance) {
            Codeview.instance = new Codeview();
        }
        return Codeview.instance;
    }

    // Getters
    get activeTab(): 'preview' | 'code' {
        return this._activeTab;
    }

    get isDarkMode(): boolean {
        return this._isDarkMode;
    }

    get isCopied(): boolean {
        return this._isCopied.status;
    }

    get code(): string {
        return this._code;
    }

    get language(): string {
        return this._language;
    }

    // Setters
    set activeTab(tab: 'preview' | 'code') {
        this._activeTab = tab;
    }

    set isDarkMode(value: boolean) {
        this._isDarkMode = value;
    }

    // Methods
    toggleDarkMode(): void {
        this._isDarkMode = !this._isDarkMode;
    }

    async copyCode(): Promise<void> {
        try {
            await navigator.clipboard.writeText(this._code);
            this._isCopied = { status: true, timestamp: Date.now() };
            setTimeout(() => {
                if (Date.now() - this._isCopied.timestamp >= 2000) {
                    this._isCopied = { status: false, timestamp: 0 };
                }
            }, 2000);
        } catch (error) {
            console.error('Failed to copy code:', error);
        }
    }

    switchTab(tab: 'preview' | 'code'): void {
        if (this._activeTab !== tab) {
            this._activeTab = tab;
        }
    }

    updateCode(code: string): void {
        this._code = code;
    }

    updateLanguage(language: string): void {
        this._language = language;
    }
}

export const codeview = Codeview.getInstance();