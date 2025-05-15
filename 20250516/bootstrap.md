# Bootstrap이란?
부트스트랩(Bootstrap)은 웹사이트를 쉽게 만들 수 있게 도와주는 CSS, JS 프레임워크이다.  
하나의 코드로 휴대폰, 태블릿, 데스크탑까지 다양한 기기에서 작동하게 만들 수 있으며,  
다양한 기능을 제공하여 사용자가 쉽게 웹사이트를 제작, 유지, 보수할 수 있도록 도와준다.

- 사이트 : https://getbootstrap.com/
- 가이드 : https://getbootstrap.com/docs/5.3/getting-started/introduction

## `반응형 웹` 
크기가 다양한 디바이스 사이즈에 최적화된 UI를 제공하는 기술.
부트스트랩은 반응형 웹을 지원하며, 현재 개발자들이 가장 많이 사용하는 웹디자인 프레임워크이다.

1. 시작하기 
`index.html` 생성  
css, html 삽입하기  

2. Grid System
`index2.html`
Bootstrap에서는 편리한 화면 구성을 위해 그리드 시스템을 제공한다.  
Boostrap은 총 **12 분할**을 기준으로 화면 구성을 지원한다.  
- row : 행
- col : 열

### sm, md, lg ?
https://getbootstrap.kr/docs/5.0/layout/grid/
Bootstrap의 sm, md, lg는 화면 크기에 따라 레이아웃을 다르게 보여주기 위한 "반응형(responsive)" 단위

| 구분   | 화면 크기 기준 | 설명                      |
| ---- | -------- | ----------------------- |
| `sm` | 576px 이상 | 작은 화면 (스마트폰 가로, 작은 태블릿) |
| `md` | 768px 이상 | 중간 화면 (태블릿)             |
| `lg` | 992px 이상 | 큰 화면 (노트북, 데스크탑)        |

```html
<div class="col-sm-6 col-md-4 col-lg-3"></div>
```
무슨뜻인가요 ?
- 화면이 576px 이상이면 6칸 사용 (한 줄에 12칸 기준 → 50% 너비)
- 화면이 768px 이상이면 4칸 사용 (33.3%)
- 화면이 992px 이상이면 3칸 사용 (25%)

> 즉, 각 단위가 정해놓은 사이즈가 있는데, 화면이 그 사이즈보다 크면 적용된다. 

3. Components
웹페이지를 개발할떄 자주 쓰이는 UI를 가져다 쓸 수 있다.

### Alerts
https://getbootstrap.com/docs/5.3/components/alerts/

### Badge
https://getbootstrap.com/docs/5.3/components/badge/

### breadcrumb
https://getbootstrap.com/docs/5.3/components/breadcrumb/

### Button
https://getbootstrap.com/docs/5.3/components/buttons/
https://getbootstrap.com/docs/5.3/components/button-group/

### Card
https://getbootstrap.com/docs/5.3/components/card/

### carousel
https://getbootstrap.com/docs/5.3/components/carousel/

### collapse
https://getbootstrap.com/docs/5.3/components/collapse/

### dropdown
https://getbootstrap.com/docs/5.3/components/dropdowns/

### forms
https://getbootstrap.com/docs/5.3/forms/overview/
https://getbootstrap.com/docs/5.3/forms/input-group/

### jumbotron
https://getbootstrap.com/docs/4.0/components/jumbotron/

### list group
https://getbootstrap.com/docs/5.3/components/list-group/

### modal
https://getbootstrap.com/docs/5.3/components/modal/

### navbar
https://getbootstrap.com/docs/5.3/components/navbar/
핸드폰 화면

### pagination
https://getbootstrap.com/docs/5.3/components/pagination/

### progress
https://getbootstrap.com/docs/5.3/components/progress/

### spinner
https://getbootstrap.com/docs/5.3/components/spinners/

### toast
https://getbootstrap.com/docs/5.3/components/toasts/

4. Utility

### color 
https://getbootstrap.com/docs/5.3/utilities/colors/

### display 
https://getbootstrap.com/docs/5.3/utilities/display/

### interactions
https://getbootstrap.com/docs/5.3/utilities/interactions/

### text 
https://getbootstrap.com/docs/5.3/utilities/text/

5. UI Templates  
https://getbootstrap.com/docs/5.3/examples/
🌟 https://startbootstrap.com/  
https://themes.getbootstrap.com/   
https://wrapbootstrap.com/templates  
  