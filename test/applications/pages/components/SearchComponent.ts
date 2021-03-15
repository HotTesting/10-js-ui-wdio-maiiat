export class SearchComponent {
    private get root(): WebdriverIO.Element {
        return $('div#search');
    }

    searchByText(text:string) {
        const searchInput = $('input[placeholder="Search"]');
        searchInput.waitForDisplayed();
        this.root.$(searchInput).setValue(text);
        $('i.fa.fa-search').click();
    }

}