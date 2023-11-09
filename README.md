Vue.js로 퍼블리싱 재구현하기

```
pub-project
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ css
│  │  │  ├─ layout.css
│  │  │  ├─ layout.css.map
│  │  │  └─ tailwind.css
│  │  └─ sass
│  │     ├─ abstracts
│  │     │  └─ _variables.scss
│  │     ├─ base
│  │     │  ├─ _icon.scss
│  │     │  ├─ _typography.scss
│  │     │  └─ _util.scss
│  │     ├─ components
│  │     │  ├─ _allCheckComp.scss
│  │     │  ├─ _badge.scss
│  │     │  ├─ _buttons.scss
│  │     │  ├─ _chips.scss
│  │     │  ├─ _component.scss
│  │     │  ├─ _dropdown.scss
│  │     │  ├─ _forms.scss
│  │     │  ├─ _list.scss
│  │     │  ├─ _modal.scss
│  │     │  ├─ _pagination.scss
│  │     │  ├─ _required.scss
│  │     │  ├─ _select.scss
│  │     │  ├─ _spinner.scss
│  │     │  ├─ _swiper.scss
│  │     │  ├─ _switch.scss
│  │     │  ├─ _tab.scss
│  │     │  ├─ _table.scss
│  │     │  └─ _tooltip.scss
│  │     ├─ config
│  │     │  ├─ _font.scss
│  │     │  └─ _reset.scss
│  │     ├─ layout
│  │     │  ├─ _filter.scss
│  │     │  └─ _header.scss
│  │     ├─ layout.scss
│  │     └─ pages
│  │        ├─ _document.scss
│  │        ├─ _main.scss
│  │        ├─ _modal.scss
│  │        └─ _search.scss
│  ├─ components
│  │  ├─ common
│  │  │  ├─ BaseIcon.vue
│  │  │  ├─ BasePagination.vue
│  │  │  ├─ CompMypageLayer.vue
│  │  │  ├─ CompSearchLayer.vue
│  │  │  └─ CompSpinner.vue
│  │  ├─ document
│  │  │  ├─ DocumentFootnote.vue
│  │  │  ├─ DocumentHeader.vue
│  │  │  └─ DocumentNav.vue
│  │  └─ search
│  │     ├─ SearchEditBtn.vue
│  │     ├─ SearchFilter.vue
│  │     ├─ SearchHeader.vue
│  │     ├─ SearchResponsiveEditBtn.vue
│  │     ├─ SearchRightPanel.vue
│  │     ├─ SearchTabDoc.vue
│  │     ├─ SearchTabFile.vue
│  │     ├─ SearchTabIndex.vue
│  │     ├─ SearchTabOpinion.vue
│  │     └─ SearchToolbar.vue
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  └─ views
│     ├─ DocumentView.vue
│     ├─ MainView.vue
│     ├─ modal
│     │  ├─ ModalAlert.vue
│     │  ├─ ModalComment.vue
│     │  ├─ ModalConfirm.vue
│     │  ├─ ModalDocInfo.vue
│     │  ├─ ModalDocumentSet.vue
│     │  ├─ ModalManager.vue
│     │  ├─ ModalStatus.vue
│     │  ├─ ModarFileDownload.vue
│     │  ├─ ModarFilterSet.vue
│     │  ├─ ModarRcommendKeyword.vue
│     │  └─ ModarReference.vue
│     ├─ ModalView.vue
│     ├─ SearchLoadingView.vue
│     └─ SearchView.vue

```