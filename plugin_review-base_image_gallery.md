
## Bases Image Gallery

The latest release of this entry failed one or more automated checks. See the Reviews section below.

### Reviews

Date: Jun 14, 2026Version: 0.1.3Commit: [ac216e3](https://github.com/ghyatt/obsidian-bases-image-gallery/commit/ac216e32cd03a55a5f010c0c37411f24eaf29a87)Failed

#### LICENSE

- Warning
    
    The repository does not have a recognized license.
    

#### RELEASES

- Recommendation
    
    The release has no description. Release notes help users understand what changed.
    
- Recommendation
    
    Missing GitHub artifact attestations for release assetsmain.js, styles.cssArtifact attestations let users cryptographically verify the provenance of the release assets, proving they were built from the source repository. [Learn more](https://docs.github.com/en/actions/security-for-github-actions/using-artifact-attestations/using-artifact-attestations-to-establish-provenance-for-builds)
    

#### SOURCE CODE

- Error
    
    Sets styles directly instead of using CSS classes, `setCssProps`, or `setCssStyles`obsidianmd/no-static-styles-assignment[src/bases-view.ts:26](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/bases-view.ts#L26)[src/bases-view.ts:56](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/bases-view.ts#L56)[src/bases-view.ts:57](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/bases-view.ts#L57)[src/build-lightbox.ts:32](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L32)[src/render-error.ts:6](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/render-error.ts#L6)[src/render-error.ts:7](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/render-error.ts#L7)[src/render-error.ts:8](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/render-error.ts#L8)[src/render-error.ts:9](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/render-error.ts#L9)[src/render-error.ts:10](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/render-error.ts#L10)
    
- Warning
    
    "builtin-modules" should be replaced with an alternative package.[Learn more](https://github.com/es-tooling/module-replacements/blob/main/docs/modules/builtin-modules.md)[package.json:31](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/package.json#L31)
    
- Warning
    
    Unexpected any. Specify a different type.[src/bases-view.ts:20](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/bases-view.ts#L20)[src/bases-view.ts:82](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/bases-view.ts#L82)[src/build-horizontal.ts:3](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-horizontal.ts#L3)[src/build-horizontal.ts:4](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-horizontal.ts#L4)[src/build-lightbox.ts:5](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L5)[src/build-lightbox.ts:52](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L52)[src/build-lightbox.ts:107](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L107)[src/build-vertical.ts:3](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-vertical.ts#L3)[src/build-vertical.ts:4](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-vertical.ts#L4)
    
- Warning
    
    Unsafe call of an `any` typed value.[src/bases-view.ts:70](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/bases-view.ts#L70)[src/build-horizontal.ts:16](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-horizontal.ts#L16)[src/build-lightbox.ts:61](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L61)[src/build-lightbox.ts:66](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L66)[src/build-lightbox.ts:66](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L66)[src/build-lightbox.ts:97](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L97)[src/build-lightbox.ts:102](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L102)[src/build-lightbox.ts:111](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L111)[src/build-lightbox.ts:111](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L111)[src/build-lightbox.ts:113](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L113)[src/build-lightbox.ts:113](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L113)[src/build-lightbox.ts:117](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L117)[src/build-vertical.ts:16](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-vertical.ts#L16)
    
- Warning
    
    Unsafe member access .destroy on an `any` value.[src/bases-view.ts:70](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/bases-view.ts#L70)
    
- Warning
    
    Use 'activeDocument' instead of 'document' for popout window compatibility.[src/build-lightbox.ts:30](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L30)[src/build-lightbox.ts:59](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L59)[src/build-lightbox.ts:76](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L76)
    
- Warning
    
    Unsafe assignment of an `any` value.[src/build-lightbox.ts:54](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L54)[src/build-lightbox.ts:71](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L71)[src/build-lightbox.ts:78](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L78)[src/build-lightbox.ts:96](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L96)[src/build-lightbox.ts:109](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L109)[src/build-lightbox.ts:114](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L114)[src/build-lightbox.ts:115](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L115)
    
- Warning
    
    Unsafe member access .instance on an `any` value.[src/build-lightbox.ts:54](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L54)[src/build-lightbox.ts:96](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L96)[src/build-lightbox.ts:109](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L109)
    
- Warning
    
    Unsafe member access .outer on an `any` value.[src/build-lightbox.ts:61](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L61)[src/build-lightbox.ts:66](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L66)[src/build-lightbox.ts:97](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L97)[src/build-lightbox.ts:111](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L111)[src/build-lightbox.ts:113](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L113)
    
- Warning
    
    Unsafe member access .get on an `any` value.[src/build-lightbox.ts:66](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L66)
    
- Warning
    
    Computed name [galleryInstance.index] resolves to an `any` value.[src/build-lightbox.ts:71](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L71)
    
- Warning
    
    Unsafe member access .index on an `any` value.[src/build-lightbox.ts:71](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L71)[src/build-lightbox.ts:114](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L114)
    
- Warning
    
    Unsafe member access .name on an `any` value.[src/build-lightbox.ts:74](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L74)[src/build-lightbox.ts:116](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L116)
    
- Warning
    
    Passes unsafe values into typed parameters@typescript-eslint/no-unsafe-argument[src/build-lightbox.ts:74](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L74)[src/build-lightbox.ts:74](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L74)
    
- Warning
    
    Unsafe member access .size on an `any` value.[src/build-lightbox.ts:74](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L74)
    
- Warning
    
    Unsafe member access .ctime on an `any` value.[src/build-lightbox.ts:74](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L74)
    
- Warning
    
    Unsafe member access .closeGallery on an `any` value.[src/build-lightbox.ts:102](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L102)[src/build-lightbox.ts:117](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L117)
    
- Warning
    
    Unsafe member access .append on an `any` value.[src/build-lightbox.ts:111](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L111)
    
- Warning
    
    Unsafe member access .on on an `any` value.[src/build-lightbox.ts:113](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L113)
    
- Warning
    
    Computed name [index] resolves to an `any` value.[src/build-lightbox.ts:115](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L115)
    
- Warning
    
    Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.[src/build-lightbox.ts:116](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L116)
    
- Warning
    
    Unsafe member access .folder on an `any` value.[src/build-lightbox.ts:116](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/src/build-lightbox.ts#L116)
    

#### CSS LINT

- Warning
    
    Unexpected browser feature "multicolumn" is only partially supported by Obsidian 1.9.12[styles.css:940](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L940)[styles.css:941](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L941)
    
- Warning
    
    Unexpected duplicate "cursor"[styles.css:506](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L506)[styles.css:507](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L507)[styles.css:508](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L508)[styles.css:509](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L509)[styles.css:514](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L514)[styles.css:515](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L515)[styles.css:516](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L516)[styles.css:517](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L517)[styles.css:518](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L518)[styles.css:780](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L780)[styles.css:781](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L781)[styles.css:782](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L782)[styles.css:783](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L783)[styles.css:788](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L788)[styles.css:789](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L789)[styles.css:790](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L790)[styles.css:791](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L791)[styles.css:792](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L792)
    
- Warning
    
    Avoid !important — override styles by increasing selector specificity or using CSS variables instead.[styles.css:9](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L9)[styles.css:74](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L74)[styles.css:91](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L91)[styles.css:96](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L96)[styles.css:102](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L102)[styles.css:363](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L363)[styles.css:364](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L364)[styles.css:365](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L365)[styles.css:366](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L366)[styles.css:493](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L493)[styles.css:494](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L494)[styles.css:495](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L495)[styles.css:496](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L496)[styles.css:500](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L500)[styles.css:501](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L501)[styles.css:543](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L543)[styles.css:549](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L549)[styles.css:553](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L553)[styles.css:649](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L649)[styles.css:650](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L650)[styles.css:651](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L651)[styles.css:652](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L652)[styles.css:726](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L726)[styles.css:727](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L727)[styles.css:731](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L731)[styles.css:732](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L732)[styles.css:797](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L797)[styles.css:798](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L798)[styles.css:802](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L802)[styles.css:803](https://github.com/ghyatt/obsidian-bases-image-gallery/blob/ac216e32cd03a55a5f010c0c37411f24eaf29a87/styles.css#L803)
    

#### DEPENDENCIES

- Pass
    
    No vulnerable dependencies found.
    

#### CODE OBFUSCATION

- Pass
    
    No obfuscation detected.
    

### Current release

Version

0.1.3

Published

Jun 14, 2026

Total releases

4

Total downloads

5

### Repository

GitHub

[ghyatt/obsidian-bases-image-gallery](https://github.com/ghyatt/obsidian-bases-image-gallery)

Last pushed

Jun 14, 2026

Stars

0

Open issues

0