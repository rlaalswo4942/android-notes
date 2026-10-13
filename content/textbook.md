# 안드로이드 학습노트 — Kotlin + Jetpack Compose

> 교재 「안드로이드 ver 0.5」(0~10장, Android Studio Meerkat 2024.3.2 기준)를 단원별로 정리한 노트입니다.

---

# 시작하기: 이 노트 사용법

## 이 노트의 목적

교재 「안드로이드 ver 0.5」의 0장~10장을 **단원(U00~U10)** 하나씩 따라가며 정리했습니다.

- 교재의 **프로젝트 코드**는 들여쓰기를 살려서 그대로 옮겼습니다. Android Studio에 붙여 넣어 바로 실행해 볼 수 있습니다.
- 코드마다 **무엇이 핵심인지** 표와 목록으로 짚었습니다. 교재에 없는 설명은 [교육용 설명] 라벨을 붙였습니다.
- 교재의 **연습문제**는 단원 끝 "교재 연습문제 풀이"에 모았습니다. 답은 `정답 보기`를 눌러야 보입니다.
- "시험 대비: 빈칸 채우기"는 교재 코드의 핵심 부분을 가린 문제입니다. 손으로 먼저 채운 뒤 정답을 펼쳐 보세요.

## 읽는 방법

1. 단원의 **오늘의 목표**를 먼저 읽고, 섹션을 순서대로 읽습니다. 다 읽은 섹션은 읽음 버튼을 눌러 둡니다.
2. 코드 블록은 **Android Studio에 직접 쳐 보는 것**이 가장 빠릅니다. 이 PC에서는 Android Studio(코딩) + Genymotion(가상 기기)으로 실행합니다.
3. 연습문제는 직접 풀어 본 다음 정답을 펼칩니다.
4. 단원 끝 **목표 자가점검**과 연습문제 메뉴의 단원별 문제로 확인합니다.

## 공통 코드 생략 규칙

교재처럼 모든 프로젝트에 똑같이 들어가는 부분은 `⋮`로 줄였습니다. 줄인 부분은 아래와 같습니다.

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            // ⋮  ← 프로젝트마다 바뀌는 부분
        }
    }
}
```

- `import` 문은 생략했습니다. 빨간 글씨가 보이면 **[Alt] + [Enter]**를 눌러 추가합니다.
- 파일 경로 `app/.../MainActivity.kt`는 `app/kotlin+java/com.android.example.프로젝트이름/MainActivity.kt`를 줄인 것입니다.

## 전체 지도

| 순서 | 단원 | 첫 목표 | 난이도 |
|---|---|---|---|
| 0 | U00 시작하기 | 첫 프로젝트 Hello Android 실행 | 시작 |
| 1 | U01 Jetpack Compose 코드 스타일 | 컴포저블·상태·Text·TextField·Button | 기초 |
| 2 | U02 컨테이너 | Column·Row·Box·Surface·Scaffold·Card·대화 상자 | 기초 |
| 3 | U03 기본 컴포저블 | Text·TextField·Icon·Image·여러 가지 버튼 | 기초 |
| 4 | U04 지연 구성 요소 | LazyColumn·LazyVerticalGrid·스프링 애니메이션 | 기본 |
| 5 | U05 그래픽스 | Canvas·그래픽 수정자·코루틴·애니메이션 | 기본 |
| 6 | U06 상태 | remember·상태 호이스팅·ViewModel | 핵심 |
| 7 | U07 화면 전환 | Navigation·화면 간 자료 전달·공유 | 응용 |
| 8 | U08 자료 저장과 관리 | 파일·Room 데이터베이스·WorkManager | 응용 |
| 9 | U09 네트워크 통신 | 파일 다운로드·Retrofit·Coil | 응용 |
| 10 | U10 애플리케이션 구성 요소 | 액티비티·인텐트·서비스·브로드캐스트 | 심화 |

## 실습 환경

| 항목 | 내용 |
|---|---|
| IDE | Android Studio Meerkat 2024.3.2 (교재 기준) |
| 언어 | Kotlin |
| UI | Jetpack Compose + Material3 |
| 가상 기기 | 교재는 Medium Phone API 36, 이 PC는 Genymotion Phone(Android 15, API 35) |
| 실행 | 메뉴 Run → Run 'app', 또는 [Shift] + [F10] |

---

# U00. 시작하기

### 오늘의 목표

- 안드로이드 UI 개발이 XML+Java에서 Kotlin+Jetpack Compose로 바뀐 흐름을 말할 수 있다.
- Android Studio에서 Empty Activity 프로젝트를 만들 수 있다.
- 가상 기기를 띄우고 프로젝트를 실행할 수 있다.
- Hello Android 코드에서 화면을 채우는 함수와 글자를 찍는 함수를 찾을 수 있다.

### 안드로이드의 역사

- **2008년** 구글이 첫 안드로이드 스마트폰을 발표했고, 지금은 모바일 기기 대부분이 쓰는 운영체제가 되었습니다.
- 개발 방식은 이렇게 바뀌었습니다.

| 시기 | UI 설계 | 코드 언어 |
|---|---|---|
| 초기 | XML 레이아웃 파일 | Java |
| 이후 | XML + Jetpack 라이브러리 | Kotlin 공식 지원 |
| 최근 (이 교재) | **Jetpack Compose (선언형 UI)** | **Kotlin** |

### Jetpack Compose란

- 안드로이드 UI를 만드는 **선언형 UI 도구 모음**입니다. 코드가 짧고 Kotlin API가 직관적입니다.
- UI를 **컴포저블(composable function)**이라는 함수로 정의하면, 나머지 작업은 Compose 컴파일러가 처리합니다.
- 그래서 개발자는 "요소를 만들고 부모에 붙이는 과정"보다 **"UI가 어떤 모양인지"**에 집중합니다.
- 공식 교육 과정에는 Kotlin 강의도 있습니다. [S01]

[교육용 설명] **선언형**은 "화면이 이렇게 생겼다"를 적는 방식입니다. "버튼을 만들고, 글자를 바꾸고, 다시 그려라" 하고 순서를 지시하는 방식은 **명령형**이라고 합니다. Compose에서는 데이터(상태)가 바뀌면 화면이 저절로 다시 그려집니다.

### 개발 도구와 가상 기기

- 개발 도구: **Android Studio**. 개발자 사이트(developer.android.com)에서 내려받습니다. 교재 기준 버전은 **Meerkat 2024.3.2**입니다.
- 실행 대상은 두 가지입니다.
  - 실제 스마트 기기를 **개발자 모드**로 PC에 연결
  - **AVD(Android Virtual Device, 안드로이드 가상 기기)**. 교재는 이쪽을 씁니다.
- 가상 기기 설치: 오른쪽 끝 [Device Manager] → [Add a new device] → 교재는 **Medium Phone + API 36** → [Start]로 실행합니다.

[교육용 설명] 이 PC에서는 Google 공식 에뮬레이터가 실행되지 않습니다. 그래서 **Genymotion**으로 가상 기기를 띄우고, Android Studio의 실행 대상 목록에서 그 기기를 고릅니다.

### 첫 프로젝트 만들기와 실행

1. [Welcome to Android Studio] → [Projects] → **[New Project]**
2. **[Phone and Tablet] → [Empty Activity]** → [Next]
3. Name: `Hello Android`, Save location: `...\Ch00\HelloAndroid` → [Finish]
4. 가상 기기를 [Start]로 켭니다.
5. 메뉴 **Run → Run 'app'**, 또는 [Run 'app'] 버튼, 또는 **[Shift] + [F10]**

### Hello Android 코드 읽기

`app/kotlin+java/com.android.example.helloandroid/MainActivity.kt`

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            HelloAndroidTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    Greeting(
                        name = "Android",
                        modifier = Modifier.padding(innerPadding)
                    )
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    HelloAndroidTheme {
        Greeting("Android")
    }
}
```

화면에 `Hello Android!`가 찍히기까지 이렇게 흘러갑니다.

| 단계 | 코드 | 하는 일 |
|---|---|---|
| 1 | `setContent { … }` | **화면을 채우는 함수**. 중괄호 안의 내용으로 화면을 채운다 |
| 2 | `HelloAndroidTheme { … }`, `Scaffold(…)` | 테마와 화면 뼈대 (U02에서 배움) |
| 3 | `Greeting(name = "Android", …)` | 직접 만든 컴포저블 호출 |
| 4 | `Text(text = "Hello $name!")` | **실제로 글자를 출력**하는 컴포저블 |

- `"Hello $name!"`의 `$name`은 Kotlin의 **문자열 템플릿**입니다. 변수 값이 그 자리에 들어가므로 결과는 `Hello Android!`입니다.
- `@Preview`가 붙은 함수는 앱을 실행하지 않아도 편집기 미리보기에 나타납니다.

### 시험 대비: 빈칸 채우기

```kotlin
class MainActivity : ComponentActivity() {
    override fun 【①】(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        【②】 {
            Greeting(name = "Android")
        }
    }
}

【③】
fun Greeting(name: String, modifier: Modifier = Modifier) {
    【④】(text = "Hello $name!", modifier = modifier)
}
```

<details><summary>정답 보기</summary>

① `onCreate` — 액티비티가 생성될 때 실행되어 첫 화면을 구성합니다.
② `setContent` — 화면을 채울 내용을 지정합니다.
③ `@Composable` — UI를 정의하는 함수라는 표시입니다.
④ `Text` — 문자열을 출력합니다.

</details>

### 핵심 정리

- Compose = **선언형 UI**, UI는 `@Composable` 함수로 만듭니다.
- 프로젝트 생성: **Phone and Tablet → Empty Activity**
- 실행: **Run 'app' / [Shift]+[F10]**, 대상은 실제 기기나 가상 기기(AVD)입니다.
- `setContent { }` = 화면 채우기, `Text()` = 글자 출력

---

# U01. Jetpack Compose 코드 스타일

### 오늘의 목표

- 컴포저블·주석·미리보기·상태·리컴포지션·슬롯의 뜻을 말할 수 있다.
- `Text`의 `fontSize`, `color`, `modifier`를 지정할 수 있다.
- `remember { mutableStateOf() }`로 상태를 만들고 `TextField`에 연결할 수 있다.
- 후행 람다와 `it`의 의미를 설명할 수 있다.
- `Button`의 `onClick`으로 이벤트를 처리할 수 있다.
- `Image`, `Modifier`, 리소스(strings·colors·dimens), `Log`·`Toast`를 쓸 수 있다.

### 컴포저블과 주석

- 전통적인 객체 지향 UI에서는 UI 요소가 클래스나 객체입니다. **선언형 UI인 Compose에서는 함수**입니다.
- UI를 정의하는 함수를 **컴포저블 함수(composable function)**, 줄여서 **컴포저블**이라 합니다. "구성 가능한 함수"라고도 합니다.

```kotlin
@Composable
fun Foo() {
    // UI 요소를 구성하는 코드
}
```

| 규칙 | 내용 |
|---|---|
| 선언 | 주석 `@Composable`을 붙임 |
| 반환값 | 일반적으로 없음 |
| 호출 | 컴포저블을 호출하는 함수도 **컴포저블이어야** 함 |
| 이름 | **파스칼 표기법**(PascalCase): `Greeting`, `TextInputApp` |

- 여러 컴포저블을 결합해 트리 구조를 만들고 UI를 완성하는 과정을 **컴포지션(composition)**이라 합니다. [S02]
- **주석(annotation)**은 코드에 추가 정보를 붙이는 방법입니다. 선언 앞에 `@이름`으로 적고, 컴파일러 같은 도구가 이 정보를 읽습니다. `@Composable`, `@Preview`가 모두 주석입니다.

[교육용 설명] 여기서 말하는 "주석"은 `//`로 쓰는 comment가 아니라 **annotation**입니다. 헷갈리지 않게 주의하세요.

### 미리보기

편집기 오른쪽 위의 보기 모드 버튼

| 버튼 | 표시 |
|---|---|
| Code | 코드만 |
| Split | 코드 + 미리보기 |
| Design | 미리보기만 |

```kotlin
@Preview
@Composable
fun PreviewExample() {
    Text("Hello, Jetpack Compose!")
}
```

`@Preview`를 붙이면 **앱을 실행하지 않고도** UI를 확인할 수 있습니다. `@Preview(showBackground = true)`는 흰 배경을 깔아 줍니다.

### 상태와 리컴포지션

- **상태(state)**: UI 요소의 현재 정보입니다.
- 상태가 바뀌면 Compose가 UI를 자동으로 **다시 구성**합니다. 이것을 **리컴포지션(recomposition)**이라 합니다.

```kotlin
@Composable
fun Counter() {
    var count by remember { mutableStateOf(0) }
    Button(onClick = { count++ }) {
        Text("Count: $count")
    }
}
```

- 버튼을 누름 → `count++` → 상태가 바뀜 → `Text`가 다시 그려집니다.
- 리컴포지션은 **바뀐 부분만** 다시 그립니다. 그래도 불필요한 그리기를 막는 것이 성능 최적화의 핵심입니다.

### 슬롯

- **슬롯(slot)**은 컴포저블을 대입하는 컴포저블의 **매개 변수**입니다. 함수의 매개 변수로 함수를 넘기는 것입니다.

```kotlin
@Composable
fun MyComposable(content: @Composable () -> Unit) {
}
```

- `content`가 슬롯입니다. 여기에 문자열을 넣으면 문자열이, 그림을 넣으면 그림이 나옵니다. 그만큼 **유연하고 재사용성이 높습니다.**
- `Column`, `Button`, `Scaffold` 같은 기본 컴포넌트가 대부분 슬롯을 씁니다.

### 문자열 출력 — Text

프로젝트 1.2.1 Text Output Demo

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            Text(
                text = "산은 높고 물은 깊어",
                modifier = Modifier.statusBarsPadding()
            )
        }
    }
}
```

| 코드 | 뜻 |
|---|---|
| `ComponentActivity` | `Activity`에서 파생된 클래스. Activity = 안드로이드 앱의 **실행 단위**(UI 구성 + 사용자 입력 처리) |
| `onCreate()` | 앱을 생성할 때 실행되어 **초기 화면 구성** |
| `enableEdgeToEdge()` | 앱을 화면 전체에 배치하고 상태 표시줄 색상 지정 |
| `setContent { }` | 화면을 채울 내용 지정 |
| `Modifier` | 컴포저블을 장식·강화 |
| `statusBarsPadding()` | 위쪽에 **상태 표시줄 크기만큼 여백** 추가 (없으면 글자가 상태 표시줄에 가려짐) |

글꼴 크기와 색:

```kotlin
Text(
    text = "산은 높고 물은 깊어",
    modifier = Modifier.statusBarsPadding(),
    fontSize = 30.sp,
    color = Color.Magenta
)
```

- 글꼴 크기 단위 **sp(scalable pixel)**: 사용자가 기기에 설정한 글꼴 크기에 따라 달라집니다.
- `sp`가 빨갛게 나오면 **[Alt] + [Enter]**를 눌러 import합니다. 편집기 오류는 대부분 이 키로 해결됩니다.

Kotlin **이름 붙인 인수**: 아래 네 호출은 결과가 모두 같습니다.

```kotlin
fun f(x: Int, y: Int) {
    println("x: $x, y: $y")
}
fun main() {
    f(10, 20)
    f(x = 10, 20)
    f(10, y = 20)
    f(y = 20, x = 10)
}
```

### 문자열 입력 — TextField와 상태

프로젝트 1.2.2 Text Input Demo

```kotlin
@Composable
fun TextInputApp() {
    var text by remember { mutableStateOf("") }
    TextField(
        value = text,
        onValueChange = { input -> text = input },
        modifier = Modifier.statusBarsPadding()
    )
}
```

- `TextField`는 입력한 내용을 **스스로 기억하지 못합니다.** 그래서 상태 변수 `text`에 저장합니다.
- `var text by remember { mutableStateOf("") }` → `text`는 `""`로 초기화된 **상태**입니다. 값이 바뀌면 이 변수를 쓰는 `TextField`가 리컴포지션됩니다.
- `by`를 쓰려면 아래 import가 필요합니다. `by`에 커서를 두고 [Alt]+[Enter]를 누르면 추가됩니다.

```kotlin
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
```

- `onValueChange`는 **입력할 때마다** 실행됩니다. 자료형은 `(String) -> Unit`, 곧 String을 받고 반환값이 없는 함수입니다. `Unit`은 C의 `void`에 해당합니다.
- `onValueChange = {}`로 비워 두면 상태가 바뀌지 않으므로 **아무것도 입력할 수 없습니다.**

### Kotlin 후행 람다와 it

**후행 람다(trailing lambda)**: 마지막 매개 변수가 함수이면, 그 함수를 괄호 밖 중괄호로 적을 수 있습니다.

```kotlin
fun f(x: Int, g: (Int) -> Int) {
    println(g(x))
}
fun h(x: Int): Int {
    return x + 1
}
fun main() {
    f(10, ::h)                     // 함수 h를 직접 전달
    f(10) { input -> input + 1 }   // 후행 람다
    f(10) { it + 1 }               // 매개 변수가 하나면 it
}
```

- 세 호출의 결과는 모두 `11`입니다.
- 매개 변수가 **한 개**일 때 `it`이 그 매개 변수를 가리킵니다. 그래서 `onValueChange = { input -> text = input }`는 **`onValueChange = { text = it }`**로 줄여 쓸 수 있습니다.

### 이벤트 — Button

프로젝트 1.2.3 Event Demo: 버튼을 누르면 TextField의 내용을 Text로 복사합니다.

```kotlin
@Composable
fun EventDemoApp() {
    var inputValue by remember { mutableStateOf("") }
    var copyValue by remember { mutableStateOf("") }
    Column(modifier = Modifier.statusBarsPadding()) {
        TextField(
            value = inputValue,
            onValueChange = { inputValue = it }
        )
        Text(text = copyValue)
        Button(
            onClick = { copyValue = inputValue }
        ) {
            Text(text = "Copy")
        }
    }
}
```

- 버튼 레이블은 `Text`로 표시합니다. `Icon`이나 `Image`도 쓸 수 있습니다. 버튼의 `content`가 **슬롯**이기 때문입니다.
- 버튼을 누르면 `onClick` 실행 → `copyValue`가 바뀜 → 그 값을 쓰는 `Text`가 다시 구성됩니다.
- `Column`은 안에 든 컴포저블을 **세로로** 배치합니다. 여기서는 TextField → Text → Button 순서입니다.

### 그림 출력 — Image

프로젝트 1.2.4 Simple Image Demo. 그림 파일을 **`app/res/drawable`**에 복사합니다. 파일 이름에는 **소문자와 밑줄(_)만** 씁니다.

```kotlin
@Composable
fun SimpleImageDemoApp(modifier: Modifier = Modifier) {
    Column(modifier = modifier) {
        Image(
            painter = painterResource(R.drawable.tree),
            contentDescription = null,
            modifier = Modifier.padding(16.dp),
        )
        Text(
            text = "Tree",
            modifier = Modifier.fillMaxWidth(),
            textAlign = TextAlign.Center,
        )
    }
}
```

| 코드 | 뜻 |
|---|---|
| `R.drawable.tree` | 파일 `tree.jpg`의 **아이디** |
| `painterResource(…)` | 리소스 그림을 불러옴 |
| `contentDescription` | **시각 장애인을 위한 설명**. 화면 낭독기가 읽어 줌 (없으면 `null`) |
| `Modifier.fillMaxSize()` | 가능한 한 크게 |
| `Modifier.padding(16.dp)` | 네 방향 여백 16dp |
| `padding(4.dp, 8.dp, 16.dp, 20.dp)` | **왼쪽, 위쪽, 오른쪽, 아래쪽** 순서 |

- 크기 단위 **dp(density independent pixel)**: 화면 밀도와 상관없이 일정한 크기로 보이게 하는 단위입니다. padding은 **4dp의 배수**로 주는 것이 좋습니다.
- 그림을 화면 가운데 놓으려면 `Column(verticalArrangement = Arrangement.Center, horizontalAlignment = Alignment.CenterHorizontally)`를 씁니다. U02에서 자세히 다룹니다.

### 크기와 여백 — Modifier

프로젝트 1.2.5 Modifier Demo

```kotlin
@Composable
fun ModifierDemoApp(modifier: Modifier = Modifier) {
    Column(modifier = modifier) {
        Text(
            text = "Modifier Demo",
            modifier = Modifier
                .size(300.dp, 100.dp)
                .padding(16.dp),
            fontSize = 30.sp,
        )
    }
}
```

| 함수 | 하는 일 |
|---|---|
| `fillMaxWidth()` | 폭을 최대로 (주변에 다른 요소가 없으면 화면 폭) |
| `size(w, h)` | 크기 지정 |
| `padding()` | 콘텐츠 주변 여백 |
| `background(Color.Red)` | 바탕색 |

- **수정자(Modifier)**는 컴포저블의 크기·여백 같은 배치 방법을 지정하는 인터페이스입니다. 함수가 매우 많고, 컴포저블에 따라 적용되지 않는 함수도 있습니다.
- `.`으로 이어 붙이는 방식을 **체이닝**이라 합니다. U02에서 보듯이 **순서에 따라 결과가 달라집니다.**

### 리소스

그림·색상·문자열·길이 같은 **리소스**는 `app/res` 아래에 종류별로 따로 관리합니다. [S03]

| 종류 | 파일 | 코드에서 불러오기 |
|---|---|---|
| 그림 | `res/drawable/tree.jpg` | `painterResource(R.drawable.tree)` |
| 문자열 | `res/values/strings.xml` | `stringResource(R.string.text)` |
| 색상 | `res/values/colors.xml` | `colorResource(R.color.teal_200)` |
| 길이 | `res/values/dimens.xml` (직접 만듦) | `dimensionResource(R.dimen.padding_small)` |

```xml
<!-- app/res/values/dimens.xml -->
<resources>
    <dimen name="padding_small">8dp</dimen>
</resources>

<!-- app/res/values/strings.xml -->
<resources>
    <string name="app_name">Resource Demo</string>
    <string name="text">산은 높고 물은 깊어</string>
    <string name="tree_description">풍성한 나무</string>
</resources>
```

```kotlin
@Composable
fun ResourceDemoApp() {
    Column(modifier = Modifier.statusBarsPadding()) {
        Text(
            text = stringResource(R.string.text),
            modifier = Modifier
                .background(colorResource(R.color.teal_200))
                .padding(dimensionResource(R.dimen.padding_small)),
            fontSize = 24.sp
        )
        Image(
            painter = painterResource(R.drawable.tree),
            contentDescription = stringResource(R.string.tree_description),
        )
    }
}
```

색상 `<color name="teal_200">#FF03DAC5</color>`는 **ARGB** 순서로 읽습니다.

| 자리 | FF | 03 | DA | C5 |
|---|---|---|---|---|
| 뜻 | 투명도(alpha) 255 | 빨강 3 | 초록 218 | 파랑 197 |

등록하지 않고 직접 쓰려면 `Color(0xFF03DAC5)`처럼 적습니다.

### 실행 정보 출력 — Log와 Toast

프로젝트 1.3.1 Log Demo

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.d("태그", "DEBUG 로그 메시지")
        Log.i("태그", "INFO 로그 메시지")
        Toast.makeText(this, "정보 알림", Toast.LENGTH_LONG).show()
    }
}
```

| 메서드 | 용도 |
|---|---|
| `Log.v()` | Verbose — 아주 자세한 정보 |
| `Log.d()` | **Debug** — 실행 상태 |
| `Log.i()` | **Info** — 일반 정보 |
| `Log.w()` | Warning — 경고 |
| `Log.e()` | Error — 오류 |
| `Log.wtf()` | What a Terrible Failure — 절대 일어나면 안 되는 일 |

- 로그는 편집기 왼쪽 아래 **[Logcat]**에서 봅니다.
- `Toast`는 화면에 잠깐 떴다 사라지는 메시지입니다. `makeText(컨텍스트, 문자열, 시간).show()` 형태이고, 시간은 `Toast.LENGTH_LONG` / `Toast.LENGTH_SHORT` 중에서 고릅니다. **`.show()`를 빠뜨리면 아무것도 나오지 않습니다.**

### 교재 연습문제 풀이

**1.2.1 / 1.2.2** `enableEdgeToEdge()`나 `statusBarsPadding()`을 지우면?

<details><summary>정답 보기</summary>

- `enableEdgeToEdge()`를 지우면 앱이 상태 표시줄 아래부터 그려집니다. 상태 표시줄 색은 시스템 기본값이 됩니다.
- `enableEdgeToEdge()`는 두고 `statusBarsPadding()`만 지우면 글자가 화면 맨 위에서 시작되어 **상태 표시줄에 가려집니다.**

</details>

**1.2.6** `onValueChange = {}`로 바꾸면?

<details><summary>정답 보기</summary>

입력할 때 상태 `text`를 바꾸는 코드가 없으므로 `value`가 계속 `""`입니다. 그래서 **글자를 입력해도 아무것도 나타나지 않습니다.**

</details>

**1.2.8** TextField에 입력하면 Text에도 같은 문자열이 나오게 하시오.

<details><summary>정답 보기</summary>

```kotlin
@Composable
fun MirrorApp() {
    var text by remember { mutableStateOf("") }
    Column(modifier = Modifier.statusBarsPadding()) {
        TextField(value = text, onValueChange = { text = it })
        Text(text = text)   // 같은 상태를 쓰므로 항상 같은 문자열
    }
}
```

</details>

**1.2.12** `Modifier.fillMaxWidth().padding(16.dp)`로 바꾸면?

<details><summary>정답 보기</summary>

Column이 화면 폭을 채우되 네 방향으로 16dp 안쪽부터 내용이 놓입니다. 그래서 글자가 왼쪽 위에서 16dp 떨어집니다.

</details>

**1.2.16** Column 배경을 투명도 0xCF, 빨강 0xCC, 초록 0xDD, 파랑 0x22 색으로 등록해 쓰시오.

<details><summary>정답 보기</summary>

```xml
<!-- colors.xml -->
<color name="my_bg">#CFCCDD22</color>
```

```kotlin
Column(modifier = Modifier.statusBarsPadding().background(colorResource(R.color.my_bg))) { … }
```

</details>

**1.2.17** Image 위쪽에 여백 16dp를 리소스로 주시오.

<details><summary>정답 보기</summary>

```xml
<dimen name="padding_medium">16dp</dimen>
```

```kotlin
Image(
    painter = painterResource(R.drawable.tree),
    contentDescription = stringResource(R.string.tree_description),
    modifier = Modifier.padding(top = dimensionResource(R.dimen.padding_medium))
)
```

</details>

### 시험 대비: 빈칸 채우기

```kotlin
@Composable
fun EventDemoApp() {
    var inputValue by 【①】 { 【②】("") }
    var copyValue by remember { mutableStateOf("") }
    【③】(modifier = Modifier.statusBarsPadding()) {   // 세로 배치
        TextField(
            value = inputValue,
            【④】 = { inputValue = 【⑤】 }
        )
        Text(text = copyValue)
        Button(【⑥】 = { copyValue = inputValue }) {
            Text(text = "Copy")
        }
    }
}
```

<details><summary>정답 보기</summary>

① `remember` ② `mutableStateOf` ③ `Column` ④ `onValueChange` ⑤ `it` ⑥ `onClick`

</details>

```kotlin
Text(
    text = 【①】(R.string.text),
    modifier = Modifier
        .background(【②】(R.color.teal_200))
        .padding(【③】(R.dimen.padding_small)),
    fontSize = 24.【④】
)
Image(painter = 【⑤】(R.drawable.tree), contentDescription = null)
Toast.makeText(this, "정보 알림", Toast.LENGTH_LONG).【⑥】()
```

<details><summary>정답 보기</summary>

① `stringResource` ② `colorResource` ③ `dimensionResource` ④ `sp` ⑤ `painterResource` ⑥ `show`

</details>

### 핵심 정리

- `@Composable` 함수 = UI, 이름은 **PascalCase**, 컴포저블은 컴포저블 안에서만 호출합니다.
- `var x by remember { mutableStateOf(초깃값) }` = 상태. 바뀌면 **리컴포지션**됩니다.
- `TextField(value, onValueChange)`: 상태와 연결해야 입력됩니다. `{ text = it }`
- `Button(onClick = { … }) { Text("레이블") }`: 레이블 자리가 슬롯입니다.
- 단위: 글꼴은 **sp**, 크기·여백은 **dp**
- 리소스 불러오기: `stringResource` / `colorResource` / `dimensionResource` / `painterResource`
- `Log.d()` → Logcat에서 확인, `Toast.makeText(…).show()`

---

# U02. 컨테이너

### 오늘의 목표

- `Column`·`Row`·`Box`의 배치 방향과 정렬 매개 변수를 구분할 수 있다.
- Arrangement와 Alignment의 차이를 설명할 수 있다.
- Modifier 함수의 호출 순서에 따라 크기가 어떻게 달라지는지 계산할 수 있다.
- `Surface`·`Scaffold`·`Card`로 화면의 모양과 뼈대를 만들 수 있다.
- 테마(`MaterialTheme`, `colorScheme`)가 컴포저블 색에 미치는 영향을 설명할 수 있다.
- `AlertDialog`와 `Dialog`를 상태로 열고 닫을 수 있다.

### 레이아웃이란

- **레이아웃(layout)**은 배치 형식이 정해진 컨테이너입니다. 레이아웃도 컴포저블이고, 안에 컴포저블이나 **다른 레이아웃**을 넣을 수 있습니다. [S04]
- 기본 레이아웃 세 가지:

| 레이아웃 | 배치 | content 형식 |
|---|---|---|
| `Column` | 세로로 | `ColumnScope.() -> Unit` |
| `Row` | 가로로 | `RowScope.() -> Unit` |
| `Box` | **겹쳐서** | `BoxScope.() -> Unit` |

### Column

```kotlin
@Composable
inline fun Column(
    modifier: Modifier = Modifier,
    verticalArrangement: Arrangement.Vertical = Arrangement.Top,
    horizontalAlignment: Alignment.Horizontal = Alignment.Start,
    content: @Composable ColumnScope.() -> Unit
)
```

프로젝트 2.1.1 Column Demo

```kotlin
@Composable
fun ColumnDemoApp() {
    Column(
        modifier = Modifier
            .statusBarsPadding()
            .background(Color.Magenta)
            .size(100.dp, 60.dp),                  // 폭, 높이
        horizontalAlignment = Alignment.End,       // 줄 끝에 배치
        verticalArrangement = Arrangement.Bottom,  // 바닥에 배치
    ) {
        Text(text = "2-1")
        Spacer(modifier = Modifier.height(16.dp)) // 높이 16dp인 공간
        Text(text = "2-2")
    }
}
```

- `content`는 U01에서 배운 **슬롯**입니다. Column에 넣을 컴포저블을 이 슬롯에 대입합니다.
- `Spacer`는 **여백 컴포저블**입니다. 여기서는 두 Text 사이에 높이 16dp를 끼워 넣습니다.
- `HorizontalDivider(thickness = 16.dp)`는 가로 구분선을 그립니다.

**Arrangement와 Alignment 구별법**

| 레이아웃 | 주 방향(여러 개가 줄 섬) → **Arrangement** | 교차 방향(한 줄에 하나) → **Alignment** |
|---|---|---|
| Column | 세로: `verticalArrangement` (Top·Center·Bottom·SpaceBetween…) | 가로: `horizontalAlignment` (Start·CenterHorizontally·End) |
| Row | 가로: `horizontalArrangement` (Start·Center·End·SpaceEvenly…) | 세로: `verticalAlignment` (Top·CenterVertically·Bottom) |

> 요소가 여러 개 늘어서는 방향은 **arrange**(나열)하고, 한 줄에 하나뿐인 방향은 **align**(정렬)합니다.

### Row

```kotlin
@Composable
inline fun Row(
    modifier: Modifier = Modifier,
    horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
    verticalAlignment: Alignment.Vertical = Alignment.Top,
    content: @Composable RowScope.() -> Unit
)
```

프로젝트 2.1.2 Row Demo

```kotlin
@Preview
@Composable
fun RowDemoApp() {
    Row(
        modifier = Modifier
            .statusBarsPadding()
            .background(Color.LightGray)
            .width(300.dp),                // 폭
    ) {
        Text(
            text = "1-1",
            modifier = Modifier
                .background(Color.Cyan)
                .wrapContentSize()         // 크기를 내용에 맞춘다
        )
        Column(
            modifier = Modifier
                .background(Color.Magenta)
                .size(100.dp, 60.dp),
            horizontalAlignment = Alignment.End,
            verticalArrangement = Arrangement.Bottom,
        ) {
            Text(text = "2-1")
            Spacer(modifier = Modifier.height(16.dp))
            Text(text = "2-2")
        }
        Column(
            modifier = Modifier
                .background(Color.Yellow)
                .fillMaxWidth(),           // 남은 폭을 최대한
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Text(text = "3-1")
        }
    }
}
```

- Row의 정렬 값을 지정하지 않았으므로 기본값 `Arrangement.Start`(줄 앞), `Alignment.Top`(위쪽)이 쓰입니다.
- Row 안에 Column을 넣는 것처럼 **레이아웃을 중첩**할 수 있습니다.

### Box

```kotlin
@Composable
inline fun Box(
    modifier: Modifier = Modifier,
    contentAlignment: Alignment = Alignment.TopStart,
    propagateMinConstraints: Boolean = false,
    content: @Composable BoxScope.() -> Unit
)
```

`contentAlignment`가 가질 수 있는 9가지 위치

| | Start | Center | End |
|---|---|---|---|
| **Top** | TopStart | TopCenter | TopEnd |
| **Center** | CenterStart | **Center** | CenterEnd |
| **Bottom** | BottomStart | BottomCenter | BottomEnd |

프로젝트 2.1.3 Box Demo

```kotlin
@Composable
fun BoxDemoApp() {
    Row(
        modifier = Modifier
            .statusBarsPadding()
            .wrapContentSize()
    ) {
        Box(
            modifier = Modifier
                .background(Color.LightGray)
                .size(180.dp),
            contentAlignment = Alignment.Center,
        ) {
            Button(onClick = {}) { Text("오른쪽 위로") }
        }
        Box(
            contentAlignment = Alignment.BottomEnd
        ) {
            Image(
                painter = painterResource(R.drawable.clock),
                contentDescription = "Clock Tower",
                modifier = Modifier.size(180.dp),
            )
            Image(
                painter = painterResource(R.drawable.clock),
                contentDescription = "Small Clock Tower",
                modifier = Modifier.size(90.dp),
            )
        }
    }
}
```

- `wrapContentSize()`는 **크기를 내용에 맞춥니다.** 그래서 Row의 크기는 두 Box를 배치한 결과로 정해집니다.
- 두 번째 Box에서는 큰 그림 위에 작은 그림이 **오른쪽 아래(BottomEnd)**로 겹쳐집니다. Box 안에서는 **나중에 적은 요소가 위**에 그려집니다.

### 수정자 순서

수정자(Modifier)는 **호출한 순서대로 적용**됩니다. [S05]

```kotlin
// ① size → padding
Column(modifier = Modifier.size(200.dp, 60.dp).padding(8.dp)) { Text("산은 높고 물은 깊어") }

// ② padding → size
Column(modifier = Modifier.padding(8.dp).size(200.dp, 60.dp)) { Text("산은 높고 물은 깊어") }
```

| 순서 | Column 전체 크기 | Text가 놓일 공간 |
|---|---|---|
| ① `size(200,60)` → `padding(8)` | **200 × 60** | 200−16 × 60−16 = **184 × 44** |
| ② `padding(8)` → `size(200,60)` | 200+16 × 60+16 = **216 × 76** | **200 × 60** |

- ①에서 Text가 184×44보다 크면 **잘립니다.**
- 프로젝트 2.1.4 Modifier Demo2는 `.border()`를 단계마다 끼워 넣어 이 차이를 눈으로 보여 줍니다.

```kotlin
Column(
    modifier = Modifier
        .border(width = 2.dp, color = Color.Red)    // 바깥 테두리
        .size(200.dp, 60.dp)
        .padding(8.dp)
        .border(width = 2.dp, color = Color.Green), // 여백 안쪽 테두리
    horizontalAlignment = Alignment.CenterHorizontally,
    verticalArrangement = Arrangement.Center
) {
    Text(
        text = "산은 높고 물은 깊어",
        modifier = Modifier.border(width = 2.dp, color = Color.Blue)
    )
}
```

[교육용 설명] 수정자는 **바깥에서 안쪽으로** 한 겹씩 포장한다고 생각하세요. 먼저 적은 `size`는 바깥 상자의 크기를 정하고, 나중에 적은 `padding`은 그 안쪽을 깎습니다.

### Surface

- **Material Design 컨테이너**는 배치 방법이 아니라 **눈에 보이는 모습**을 정합니다. 여러 요소를 넣으면 겹쳐 보이므로, 여러 개를 놓을 때는 안에 Column·Row·Box를 씁니다. [S06]

```kotlin
@Composable
fun Surface(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = RectangleShape,
    color: Color = MaterialTheme.colorScheme.surface,
    contentColor: Color = contentColorFor(color),
    tonalElevation: Dp = 0.dp,
    shadowElevation: Dp = 0.dp,
    border: BorderStroke? = null,
    content: @Composable () -> Unit
)
```

| 매개 변수 | 뜻 |
|---|---|
| `shape` | 모양 (`RectangleShape`, `RoundedCornerShape(8.dp)`, `CircleShape`, `CutCornerShape` …) |
| `color` / `contentColor` | 바탕색 / 안에 놓인 요소의 색 |
| `tonalElevation` | 밝은 테마에서는 **어둡게**, 어두운 테마에서는 **밝게** |
| `border` | `BorderStroke(width = 2.dp, color = Color.DarkGray)` |
| `onClick` | 클릭 이벤트 |

프로젝트 2.2.1 Surface Demo

```kotlin
@Composable
fun SurfaceDemoApp() {
    Column(Modifier.statusBarsPadding()) {
        Surface(
            modifier = Modifier.padding(8.dp),
            color = Color.LightGray,
            contentColor = Color.Magenta,
        ) { InnerText() }
        Surface(
            modifier = Modifier.padding(8.dp),
            color = Color.LightGray,
            shape = RoundedCornerShape(8.dp),
        ) { InnerText() }
        Surface(
            modifier = Modifier.padding(8.dp),
            border = BorderStroke(width = 2.dp, color = Color.DarkGray),
            shape = RoundedCornerShape(8.dp),
        ) {
            InnerText(modifier = Modifier.padding(8.dp, 0.dp)) // 가로, 세로
        }
        Surface(
            modifier = Modifier.padding(8.dp),
            tonalElevation = 8.dp,
        ) { InnerText() }
    }
}

@Composable
fun InnerText(modifier: Modifier = Modifier) {
    Text(text = "Have a nice day!!", modifier = modifier, fontSize = 24.sp)
}
```

- `padding(8.dp, 0.dp)`처럼 값이 두 개면 **가로, 세로** 순서입니다.

### Scaffold

`Empty Activity`로 만든 프로젝트에 처음부터 들어 있는 컨테이너입니다. **상단 앱 바** 같은 화면 뼈대 슬롯이 있어 화면 전체를 구성하기에 알맞습니다.

```kotlin
@Composable
fun Scaffold(
    modifier: Modifier = Modifier,
    topBar: @Composable () -> Unit = {},
    bottomBar: @Composable () -> Unit = {},
    snackbarHost: @Composable () -> Unit = {},
    floatingActionButton: @Composable () -> Unit = {},
    floatingActionButtonPosition: FabPosition = FabPosition.End,
    containerColor: Color = MaterialTheme.colorScheme.background,
    contentColor: Color = contentColorFor(containerColor),
    contentWindowInsets: WindowInsets = ScaffoldDefaults.contentWindowInsets,
    content: @Composable (PaddingValues) -> Unit
)
```

프로젝트 2.2.2 Scaffold Demo

```kotlin
// setContent 안
ScaffoldDemoTheme {
    Scaffold(
        modifier = Modifier
            .fillMaxSize()
            .statusBarsPadding(),
        topBar = { ScaffoldDemoAppBar() }
    ) { innerPadding ->
        ScaffoldDemoApp(modifier = Modifier.padding(innerPadding))
    }
}

@Composable
fun ScaffoldDemoAppBar() {
    Text(
        text = stringResource(R.string.app_name),
        fontSize = 24.sp,
        modifier = Modifier
            .background(Color.Cyan)
            .fillMaxWidth()
            .padding(8.dp),
    )
}

@Composable
fun ScaffoldDemoApp(modifier: Modifier = Modifier) {
    Text(text = "산은 높고 물은 깊어", modifier = modifier)
}
```

- 마지막 매개 변수 `content: @Composable (PaddingValues) -> Unit`는 **매개 변수가 하나인 함수**입니다.
- 그 `PaddingValues`(여기서는 `innerPadding`)에는 **상태 바·상단 앱 바·하단 앱 바의 높이**가 들어 있습니다. 이 값을 `padding`으로 주어야 내용이 앱 바에 가려지지 않습니다.
- 위쪽 여백 크기는 `innerPadding.calculateTopPadding()`으로 확인합니다.
- 앱 바는 Material3의 `TopAppBar`를 써도 됩니다. [S07]

### Card

Surface와 비슷한 Material Design 컨테이너로, 요소를 카드 모양으로 보여 줍니다. [S08]

```kotlin
@Composable
fun Card(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    shape: Shape = CardDefaults.shape,
    colors: CardColors = CardDefaults.cardColors(),
    elevation: CardElevation = CardDefaults.cardElevation(),
    border: BorderStroke? = null,
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    content: @Composable ColumnScope.() -> Unit
)
```

프로젝트 2.2.3 Card Demo

```kotlin
@Composable
fun CardDemoApp(modifier: Modifier = Modifier) {
    Card(
        modifier = modifier,
        elevation = CardDefaults.cardElevation(8.dp),
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Icon(
                imageVector = Icons.Default.Star,
                contentDescription = "star",
                modifier = Modifier.padding(start = 16.dp)
            )
            Text(
                text = stringResource(R.string.text),
                modifier = Modifier.padding(16.dp, 8.dp)
            )
        }
    }
}
```

| 매개 변수 | 뜻 / 예 |
|---|---|
| `elevation` | **그림자**를 넣어 배경 위로 떠 보이게 함 — `CardDefaults.cardElevation(8.dp)` |
| `shape` | `RoundedCornerShape(topStart = 16.dp, bottomEnd = 16.dp)` |
| `colors` | `CardDefaults.cardColors(containerColor = …, contentColor = …)` |
| `onClick` | 카드 클릭 (Button과 같은 방식) |

- `Icon`은 아이콘을 출력합니다. `Icons.Default.Star`는 별 아이콘이고, `Default`를 `Outlined`로 바꾸면 외곽선만 그려집니다.

### 테마

프로젝트를 만들면 `프로젝트이름Theme { … }`가 생깁니다. 이 함수는 `ui.theme/Theme.kt`에 정의되어 있습니다. [S09]

```kotlin
@Composable
fun ScaffoldDemoTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    dynamicColor: Boolean = true,
    content: @Composable () -> Unit
) {
    // ⋮ colorScheme 고르기
    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
```

| 매개 변수 | 뜻 |
|---|---|
| `darkTheme` | 밝기. 기본값 `isSystemInDarkTheme()`는 기기 설정을 따름. true/false를 직접 주면 기기 설정을 무시 |
| `dynamicColor` | **동적 색상**. 시스템이 배경 색을 감지해 색을 정함 |
| `typography` | 글꼴 (`Type.kt`) |
| `colorScheme` | 색상 구성 |

정체는 **`MaterialTheme`에 색상과 글꼴을 설정한 것**입니다. MaterialTheme은 Compose의 테마 관리자입니다.

프로젝트 2.2.4 Theme Demo: 테마를 직접 만듭니다.

```kotlin
// ui.theme/Colors.kt
val lightPrimary = Color(0xFF00FF00)
val lightOutline = Color(0xFF0000FF)
val lightOnPrimary = Color(0xFFFF0000)
val lightSurface = Color(0xFFFFFF00)

// ui.theme/Theme.kt
private val DemoColorScheme = lightColorScheme(
    primary = lightPrimary,
    outline = lightOutline,
    onPrimary = lightOnPrimary,
    surface = lightSurface,
)

@Composable
fun DemoTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = DemoColorScheme,
        typography = Typography,
        content = content
    )
}

// MainActivity.kt
@Composable
fun ThemeDemoApp() {
    Card(modifier = Modifier.padding(16.dp), shape = RoundedCornerShape(16.dp)) {
        Button({}) { Text("Ok") }
        OutlinedButton({}) { Text("Cancel") }
    }
}
```

- `lightColorScheme()`에는 **36가지 색**을 지정할 수 있습니다. 지정하지 않은 색은 기본값이 됩니다. `darkColorScheme()`도 같습니다.
- **버튼이 초록색인 이유**: `Button`의 기본값 `colors = ButtonDefaults.buttonColors()`가 바탕색으로 **`primary`**를 쓰기 때문입니다.
- 등록한 색을 직접 쓸 때는 **`MaterialTheme.colorScheme.색상_이름`**으로 적습니다. 예: `MaterialTheme.colorScheme.outline`
- 색상 구성표는 Material Theme Builder 사이트에서 만들어 내려받을 수 있습니다.

### 대화 상자 — AlertDialog

**대화 상자(dialog)**는 팝업 메시지를 띄우거나 사용자 입력을 요청합니다. [S10]

`AlertDialog`는 구조가 거의 정해져 있습니다. 주로 쓰는 매개 변수는 `icon`, `title`, `text`, `onDismissRequest`, `dismissButton`, `confirmButton`입니다.

프로젝트 2.3.1 AlertDialog Demo

```kotlin
@Composable
fun DialogMaker(
    @StringRes title: Int,
    @StringRes text: Int,
    onDismissRequest: () -> Unit,
    onConfirmClick: () -> Unit
) {
    AlertDialog(
        icon = { Icon(Icons.Filled.Info, null) },
        title = { Text(stringResource(title)) },
        text = { Text(stringResource(text)) },
        onDismissRequest = onDismissRequest,
        confirmButton = {
            TextButton(onClick = onConfirmClick) { Text("확인") }
        },
        containerColor = MaterialTheme.colorScheme.primaryContainer
    )
}

@Composable
fun AlertDialogDemoApp(modifier: Modifier = Modifier) {
    var showDialog by remember { mutableStateOf(false) }
    if (showDialog) {
        DialogMaker(
            title = R.string.dialog_title,
            text = R.string.dialog_text,
            onDismissRequest = { showDialog = false },
            onConfirmClick = { showDialog = false },
        )
    }
    Row(modifier = modifier) {
        Button(onClick = { showDialog = true }) { Text("대화 상자 출력") }
    }
}
```

- `showDialog`는 상태입니다. **true가 되면 리컴포지션되면서 `if` 안의 대화 상자가 그려지고, false가 되면 사라집니다.**
- `onDismissRequest`는 사용자가 **대화 상자 바깥을 눌렀을 때** 호출됩니다. 보통 닫는 코드를 넣습니다. 비워 두면(`{ }`) 바깥을 눌러도 닫히지 않습니다.
- 버튼은 `confirmButton`(확인)과 `dismissButton`(닫기)에 둡니다. `dismissButton`의 동작은 보통 `onDismissRequest`와 같습니다.
- `@StringRes`는 매개 변수가 문자열 리소스 아이디라는 표시입니다.

### 대화 상자 — Dialog

`Dialog`는 내용을 마음대로 구성하는 일반 대화 상자입니다. **확인·닫기 버튼도 `content`에 직접 만들어야 합니다.**

```kotlin
@Composable
fun Dialog(
    onDismissRequest: () -> Unit,
    properties: DialogProperties = DialogProperties(),
    content: @Composable () -> Unit
)
```

프로젝트 2.3.2 Dialog Demo

```kotlin
@Composable
fun DialogDemoApp(modifier: Modifier = Modifier) {
    val showDialog = remember { mutableStateOf(false) }
    if (showDialog.value) {
        DialogWithImage(
            onDismissRequest = { showDialog.value = false },
            onConfirmation = { showDialog.value = false }
        )
    }
    Row(modifier = modifier) {
        OutlinedButton(onClick = { showDialog.value = true }) { Text("대화 상자") }
    }
}

@Composable
fun DialogWithImage(onDismissRequest: () -> Unit, onConfirmation: () -> Unit) {
    Dialog(onDismissRequest = onDismissRequest) {
        Card(
            modifier = Modifier.fillMaxWidth().height(300.dp).padding(16.dp),
            shape = RoundedCornerShape(16.dp),
        ) {
            Column(
                modifier = Modifier.fillMaxSize(),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally,
            ) {
                Image(
                    painter = painterResource(R.drawable.tree),
                    contentDescription = "나무",
                    contentScale = ContentScale.Fit,
                    modifier = Modifier.height(120.dp)
                )
                Text(text = "그림을 표시하는 대화 상자", modifier = Modifier.padding(16.dp))
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.Center,
                ) {
                    val modifier = Modifier.padding(horizontal = 16.dp)
                    TextButton(onClick = onDismissRequest, modifier = modifier) { Text("닫기") }
                    TextButton(onClick = onConfirmation, modifier = modifier) { Text("확인") }
                }
            }
        }
    }
}
```

- 이 프로젝트는 `by` 대신 **`val showDialog = remember { mutableStateOf(false) }`**로 상태를 만들었습니다. 그래서 값을 읽고 쓸 때 **`.value`**를 붙입니다.
- 대화 상자 내용은 보통 **Card**로 만듭니다. 모양과 색을 정하기 편하기 때문입니다.

### 교재 연습문제 풀이

**2.1.1** Column의 요소를 가로로 줄 앞, 세로로 중앙에 배치하시오.

<details><summary>정답 보기</summary>

```kotlin
horizontalAlignment = Alignment.Start,
verticalArrangement = Arrangement.Center,
```

</details>

**2.1.5** Row의 Text와 Column 사이에 폭 16dp 여백을 `padding`으로 넣으시오.

<details><summary>정답 보기</summary>

Text의 수정자에 `.padding(end = 16.dp)`를 붙입니다. 또는 Column의 수정자 맨 앞에 `.padding(start = 16.dp)`를 둡니다. background보다 **앞에** 두어야 색칠되지 않은 여백이 됩니다.

</details>

**2.1.9** 버튼을 누르면 작은 그림이 오른쪽 위에 겹쳐지게 하시오.

<details><summary>정답 보기</summary>

```kotlin
var align by remember { mutableStateOf(Alignment.BottomEnd) }
// 첫째 Box의 버튼
Button(onClick = { align = Alignment.TopEnd }) { Text("오른쪽 위로") }
// 둘째 Box
Box(contentAlignment = align) { … }
```

</details>

**2.2.3** 첫째 Surface를 클릭할 때마다 LightGray와 Gray가 번갈아 나오게 하시오.

<details><summary>정답 보기</summary>

```kotlin
var gray by remember { mutableStateOf(false) }
Surface(
    onClick = { gray = !gray },
    modifier = Modifier.padding(8.dp),
    color = if (gray) Color.Gray else Color.LightGray,
    contentColor = Color.Magenta,
) { InnerText() }
```

</details>

**2.2.11** Card를 클릭하면 elevation이 8씩 늘게 하시오.

<details><summary>정답 보기</summary>

```kotlin
var elev by remember { mutableStateOf(8) }
val context = LocalContext.current
Card(
    onClick = {
        elev += 8
        Toast.makeText(context, "$elev", Toast.LENGTH_SHORT).show()
    },
    elevation = CardDefaults.cardElevation(elev.dp),
) { … }
```

컴포저블 안에서는 `this` 대신 `LocalContext.current`로 컨텍스트를 얻습니다.

</details>

**2.3.1** `onDismissRequest = { }`로 바꾸면?

<details><summary>정답 보기</summary>

대화 상자 바깥을 누르거나 뒤로 가기를 눌러도 **닫히지 않습니다.** [확인] 버튼으로만 닫힙니다.

</details>

**2.3.2** AlertDialog에 dismissButton을 추가하시오.

<details><summary>정답 보기</summary>

```kotlin
dismissButton = {
    TextButton(onClick = onDismissRequest) { Text("닫기") }
},
```

</details>

### 시험 대비: 빈칸 채우기

```kotlin
Column(
    modifier = Modifier.size(100.dp, 60.dp),
    【①】 = Alignment.End,        // 가로 위치
    【②】 = Arrangement.Bottom,   // 세로 위치
) {
    Text(text = "2-1")
    【③】(modifier = Modifier.height(16.dp))   // 여백
    Text(text = "2-2")
}

Box(【④】 = Alignment.BottomEnd) { … }        // 9곳 중 하나
```

<details><summary>정답 보기</summary>

① `horizontalAlignment` ② `verticalArrangement` ③ `Spacer` ④ `contentAlignment`

</details>

```kotlin
Scaffold(
    【①】 = { ScaffoldDemoAppBar() }
) { 【②】 ->
    ScaffoldDemoApp(modifier = Modifier.【③】(innerPadding))
}

var showDialog by remember { mutableStateOf(false) }
if (【④】) {
    AlertDialog(
        【⑤】 = { showDialog = false },     // 바깥 클릭
        confirmButton = { TextButton(onClick = { showDialog = false }) { Text("확인") } }
    )
}
```

<details><summary>정답 보기</summary>

① `topBar` ② `innerPadding` ③ `padding` ④ `showDialog` ⑤ `onDismissRequest`

</details>

### 핵심 정리

- **Column = 세로, Row = 가로, Box = 겹침.** 주 방향은 Arrangement, 교차 방향은 Alignment입니다.
- Box 위치 9곳: `TopStart` ~ `BottomEnd`, 가운데는 `Center`입니다.
- 수정자는 **적은 순서대로** 적용됩니다. `size→padding`이면 안쪽이 줄고, `padding→size`이면 바깥이 커집니다.
- Surface(모양·색) / Scaffold(`topBar`, `innerPadding`) / Card(`elevation`, `shape`, `colors`)
- 테마 = `MaterialTheme(colorScheme, typography)`. Button 바탕색은 `primary`입니다.
- 대화 상자는 **상태(showDialog)**로 열고 닫습니다. 바깥 클릭은 `onDismissRequest`가 받습니다.

---

# U03. 기본 컴포저블

### 오늘의 목표

- `Text`의 글꼴 매개 변수(`fontFamily`, `fontWeight`, `fontStyle`, `textAlign`)를 쓸 수 있다.
- 글꼴 파일을 `res/font`에 등록하고 `FontFamily`를 만들 수 있다.
- `TextField`의 `label`, `isError`, `keyboardOptions`(KeyboardType·ImeAction)를 지정할 수 있다.
- `Icon`으로 기본 아이콘·확장 아이콘·리소스 그림을 출력할 수 있다.
- `ContentScale` 7가지의 차이를 설명할 수 있다.
- 다섯 가지 문자열 버튼, `IconButton`, `Checkbox`·`IconToggleButton`·`Switch`, `RadioButton`을 쓸 수 있다.

### 문자열 출력 — Text와 글꼴

- `BasicText`는 가장 기본적인 출력 컴포저블입니다. 특별한 경우가 아니면 스타일이 적용된 **`Text`**를 씁니다.
- 입력도 마찬가지로 `BasicTextField`보다 **`TextField` / `OutlinedTextField`**를 씁니다.

`Text`의 주요 매개 변수

| 매개 변수 | 예 |
|---|---|
| `color` | `Color.Magenta` |
| `fontSize` | `24.sp` |
| `fontStyle` | `FontStyle.Italic` (기울임) |
| `fontWeight` | `FontWeight.Normal`, `FontWeight.Bold`, `FontWeight.Thin` |
| `fontFamily` | 직접 등록한 `FontFamily` |
| `textAlign` | `TextAlign.Start` / `Center` / `End` / `Justify`(양쪽 맞춤) |
| `maxLines`, `overflow` | 줄 수 제한, 넘칠 때 처리 |

**글꼴 등록 순서** (프로젝트 3.1.1 Text Demo) [S11]

1. `app/res` 아래에 디렉토리 **`font`**를 만듭니다.
2. fonts.google.com에서 **Roboto**를 내려받아 `Roboto-Regular.ttf`, `Roboto-Bold.ttf`를 복사합니다.
3. 파일 이름을 `roboto_regular.ttf`, `roboto_bold.ttf`로 바꿉니다. 리소스 이름 규칙에 따라 소문자와 밑줄만 씁니다.

```xml
<!-- strings.xml : 큰따옴표는 \" 로 적는다 -->
<string name="text">\"Anselmo,\" the old man said.</string>
```

```kotlin
// ui.theme/Type.kt
val roboto = FontFamily(
    Font(R.font.roboto_regular),                  // FontWeight.Normal
    Font(R.font.roboto_bold, FontWeight.Bold)
)

// MainActivity.kt
@Composable
fun TextDemoApp(modifier: Modifier = Modifier) {
    Column(modifier = modifier) {
        FontWeightedText(FontWeight.Normal, Modifier.wrapContentSize())
        Spacer(modifier = Modifier.height(4.dp))
        FontWeightedText(FontWeight.Bold, Modifier.wrapContentSize())
    }
}

@Composable
fun FontWeightedText(fontWeight: FontWeight, modifier: Modifier = Modifier) {
    Card(
        modifier = modifier,
        shape = RectangleShape,
        border = BorderStroke(2.dp, Color.LightGray),
    ) {
        Text(
            text = stringResource(R.string.text),
            modifier = Modifier.width(220.dp).background(Color.Yellow),
            fontSize = 24.sp,
            fontFamily = roboto,
            fontWeight = fontWeight,
        )
    }
}
```

- `fontWeight`에는 `FontWeight` 객체나 `null`을 넣습니다. `Normal`, `Bold` 같은 값은 FontWeight의 **companion 프로퍼티**입니다.
- `FontFamily`에 굵기별 파일을 등록해 두면, `fontWeight`에 맞는 파일이 자동으로 쓰입니다.

### 문자열 입력 — TextField 심화

프로젝트 3.1.2 TextField Demo: 두 수를 더하는 계산기입니다.

```kotlin
@Composable
fun TextFieldDemoApp(modifier: Modifier = Modifier) {
    var op1 by remember { mutableStateOf("") }
    var op2 by remember { mutableStateOf("") }
    var result by remember { mutableStateOf("") }
    var error1 by remember { mutableStateOf(false) }
    Column(modifier = modifier) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            TextField(
                value = op1,
                onValueChange = {
                    op1 = it
                    error1 = op1.toDoubleOrNull() == null
                },
                modifier = Modifier.weight(1.0f),
                label = { Text("첫째 수") },
                isError = error1,
                keyboardOptions = KeyboardOptions(
                    keyboardType = KeyboardType.Number,
                    imeAction = ImeAction.Next
                ),
            )
            Text(text = "+", modifier = Modifier.width(10.dp))
            TextField(
                value = op2,
                onValueChange = { op2 = it },
                modifier = Modifier.weight(1.0f),
                label = { Text("둘째 수") },
                keyboardOptions = KeyboardOptions(
                    keyboardType = KeyboardType.Number,
                    imeAction = ImeAction.Done
                ),
            )
            Text(text = "=", modifier = Modifier.width(10.dp))
            TextField(
                value = result,
                onValueChange = {},
                modifier = Modifier.weight(1.0f),
                label = { Text("결과") },
            )
        }
        Row(
            modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
            horizontalArrangement = Arrangement.SpaceEvenly
        ) {
            Button(onClick = {
                val value = op1.toDouble() + op2.toDouble()
                result = value.toString()
            }) {
                Text(text = "계산", modifier = Modifier.padding(horizontal = 8.dp))
            }
            Button(onClick = {}) {
                Text(text = "지우기", modifier = Modifier.padding(horizontal = 8.dp))
            }
        }
    }
}
```

| 매개 변수 / 코드 | 뜻 |
|---|---|
| `label = { Text("첫째 수") }` | 입력 칸 위에 뜨는 이름표 (슬롯) |
| `Modifier.weight(1.0f)` | Row 안에서 남은 폭을 **비율로 나눔**. 세 칸이 모두 1이면 똑같은 폭 |
| `isError = error1` | true이면 입력 칸이 **오류 모양**(빨간색)으로 바뀜 |
| `op1.toDoubleOrNull() == null` | 숫자로 바꿀 수 없으면 null이므로 → 오류 |
| `KeyboardType.Number` | **숫자 키패드**를 띄움. 이 밖에 `Password`, `Phone`, `Email` 등 |
| `ImeAction.Next` | 엔터 자리에 **[Next]** 표시. 누르면 다음 입력 칸으로 이동 |
| `ImeAction.Done` | 엔터 자리에 **[Done]** 표시. 누르면 키보드가 닫힘 |
| `readOnly = true` | 읽기 전용 |
| `leadingIcon` / `trailingIcon` | 입력 칸 앞/뒤 아이콘 |
| `Arrangement.SpaceEvenly` | 요소 사이와 양 끝 간격을 모두 같게 |

- `OutlinedTextField`는 TextField에 **외곽선**을 그린 것입니다. 겉모양만 다르고 기능과 사용법은 같습니다.

[교육용 설명] 빈 칸을 오류로 치지 않으려면 `error1 = op1.isNotEmpty() && op1.toDoubleOrNull() == null`처럼 조건을 하나 더 겁니다(연습문제 3.1.5).

### 아이콘 — Icon

| 이미지 종류 | 저장 방식 | 확대·축소 |
|---|---|---|
| 비트맵 | 픽셀마다 색을 기록 | 세부가 손실될 수 있음 |
| 벡터 | 좌표와 수식으로 기록 | 비교적 안정적 |

`Icon`은 이름이 같은 컴포저블이 세 가지 있고, 첫 매개 변수로 무엇을 받는지가 다릅니다: **`imageVector: ImageVector`**, `painter: Painter`, `bitmap: ImageBitmap`

```kotlin
@Composable
fun Icon(
    imageVector: ImageVector,
    contentDescription: String?,
    modifier: Modifier = Modifier,
    tint: Color = LocalContentColor.current
)
```

**Material 아이콘 전체를 쓰려면** `build.gradle.kts (Module :app)`에 의존성을 추가하고 **[Sync Now]**를 누릅니다. [S12]

```kotlin
dependencies {
    implementation("androidx.compose.material:material-icons-extended")
    // ⋮
}
```

프로젝트 3.2.1 Icon Demo

```kotlin
@Composable
fun IconDemoApp(modifier: Modifier = Modifier) {
    Column(modifier) {
        val modifier1 = Modifier.size(64.dp).padding(horizontal = 8.dp)
        Row {
            BuildIcon(Icons.Filled.Tour, modifier1)
            BuildIcon(Icons.Outlined.Tour, modifier1)
            BuildIcon(Icons.TwoTone.Tour, modifier1)
            BuildIcon(Icons.Sharp.Tour, modifier1)
            BuildIcon(Icons.Rounded.Tour, modifier1)
        }
        Row {
            BuildIcon(Icons.AutoMirrored.Filled.Forward, modifier1)
            BuildIcon(Icons.AutoMirrored.Outlined.ExitToApp, modifier1)
            Icon(
                painter = painterResource(R.drawable.lunch_dining_24dp), // res/drawable 그림
                contentDescription = null,
                modifier = modifier1,
                tint = Color(150, 75, 0)
            )
        }
    }
}

@Composable
fun BuildIcon(imageVector: ImageVector, modifier: Modifier) {
    Icon(
        imageVector = imageVector,
        contentDescription = null,
        modifier = modifier,
        tint = Color(150, 75, 0)
    )
}
```

- 스타일: **`Filled`(= `Default`)**, `Outlined`, `Sharp`, `TwoTone`, `Rounded`. 해당 스타일이 없는 아이콘은 Filled 모양이 나옵니다.
- **`AutoMirrored`**: 오른쪽에서 왼쪽으로 쓰는(RTL) 언어 환경에서 방향이 뒤집히는 아이콘입니다.
- `tint`는 아이콘 색입니다. `Color(150, 75, 0)`은 R, G, B 정수(0~255)로 만든 갈색입니다.
- 의존성은 [Project Structure] → [Dependencies] → [+] → Library Dependency에서 `material-icons-extended`를 검색해 추가해도 됩니다. 그러면 `implementation(libs.material.icons.extended)`가 들어갑니다.

### 그림 — Image와 ContentScale

```kotlin
@Composable
fun Image(
    painter: Painter,
    contentDescription: String?,
    modifier: Modifier = Modifier,
    alignment: Alignment = Alignment.Center,
    contentScale: ContentScale = ContentScale.Fit,
    alpha: Float = DefaultAlpha,
    colorFilter: ColorFilter? = null
)
```

`contentScale`: 그림과 공간의 크기가 다를 때 처리하는 방법 [S13]

| 값 | 비율 유지 | 동작 |
|---|---|---|
| **Fit** (기본값) | O | 그림 **전체**가 공간 안에 들어오게 |
| **Crop** | O | 공간을 **꽉 채우고** 넘치는 부분은 가운데 기준으로 자름 |
| FillHeight | O | **높이**를 맞춤 |
| FillWidth | O | **폭**을 맞춤 |
| **FillBounds** | **X** | 폭과 높이를 따로 늘려 공간에 딱 맞춤 (찌그러질 수 있음) |
| Inside | O | 크면 줄이고, **작으면 그대로** |
| None | — | 크기 조정 안 함. 크면 자르고 작으면 그대로 |

프로젝트 3.2.2 Image Demo

```kotlin
@Composable
fun ImageDemoApp(modifier: Modifier = Modifier) {
    Column(modifier) {
        Row {
            TreeView("Fit", ContentScale.Fit)
            TreeView("Crop", ContentScale.Crop)
            TreeView("FillWidth", ContentScale.FillWidth)
            TreeView("FillHeight", ContentScale.FillHeight)
        }
        Row {
            TreeView("FillBounds", ContentScale.FillBounds)
            TreeView("Inside", ContentScale.Inside)
            TreeView("None", ContentScale.None)
        }
    }
}

@Composable
fun TreeView(title: String, contentScale: ContentScale) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.border(2.dp, Color.Gray).padding(8.dp).size(80.dp, 80.dp),
    ) {
        Text(text = title, textAlign = TextAlign.Center)
        Image(
            painter = painterResource(R.drawable.tree2),
            contentDescription = null,
            modifier = Modifier.fillMaxSize(),
            contentScale = contentScale,
        )
    }
}
```

- `alpha = 0.5f`는 반투명입니다(0f 투명 ~ 1f 불투명).
- 모서리를 둥글게 자르려면 `Modifier.clip(RoundedCornerShape(16.dp))`, 원으로 자르려면 `Modifier.clip(CircleShape)`를 씁니다.

### 문자열 버튼 다섯 가지

모두 기능은 같고 **모양만 다릅니다.** `content`가 슬롯이라 Text나 Image를 넣을 수 있습니다.

```kotlin
@Composable
fun ButtonsDemoApp(modifier: Modifier = Modifier) {
    Column(modifier = modifier) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Button(onClick = {}) { Text(text = "Button") }
            ElevatedButton(onClick = {}) { Text(text = "ElevatedButton") }
            OutlinedButton(onClick = {}) { Text(text = "OutlinedButton") }
        }
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            FilledTonalButton(onClick = {}) { Text(text = "FilledTonalButton") }
            TextButton(onClick = {}) { Text(text = "TextButton") }
        }
    }
}
```

| 버튼 | 모양 |
|---|---|
| `Button` | primary 색으로 채운 기본 버튼 |
| `ElevatedButton` | 그림자로 떠 보이는 버튼 |
| `OutlinedButton` | 외곽선만 있는 버튼 |
| `FilledTonalButton` | 옅은 색으로 채운 버튼 |
| `TextButton` | 글자만 있는 버튼 (대화 상자의 확인·닫기에 자주 씀) |

- `Arrangement.SpaceBetween`: **양 끝에 붙이고** 사이 간격을 같게 둡니다.

### IconButton

프로젝트 3.3.2 Icon Button Demo: 복사/붙여넣기 버튼입니다.

```kotlin
@Composable
fun IconButtons() {
    var srcText by remember { mutableStateOf("") }
    var dstText by remember { mutableStateOf("") }
    var copiedText = ""
    var isCopied = false
    Column {
        Row {
            OutlinedTextField(value = srcText, onValueChange = { srcText = it })
            IconButton(onClick = {
                copiedText = srcText
                isCopied = true
            }) {
                Icon(Icons.Filled.ContentCopy, "content copy")
            }
        }
        Row {
            OutlinedTextField(value = dstText, onValueChange = {}, readOnly = true)
            IconButton(onClick = {
                if (isCopied)
                    dstText = copiedText
            }) {
                Icon(Icons.Filled.ContentPaste, "content paste")
            }
        }
    }
}
```

- `copiedText`, `isCopied`는 상태가 아닌 **보통 변수**입니다. 화면에 직접 보이지 않으니 상태일 필요가 없습니다. 화면에 보이는 `dstText`만 상태입니다.
- `IconButton`은 배경이 없어 버튼처럼 안 보일 수 있습니다. 필요하면 `Modifier.background()`로 배경을 줍니다.

[교육용 설명] 보통 변수는 리컴포지션이 일어나면 `""`/`false`로 다시 초기화됩니다. 복사 직후 다른 상태가 바뀌어 리컴포지션되면 복사한 값이 사라질 수 있습니다. 확실히 기억하려면 `remember`를 씁니다. U06에서 자세히 다룹니다.

### Checkbox · IconToggleButton · Switch

세 컴포저블 모두 **두 상태(켜짐/꺼짐)**를 나타냅니다. 매개 변수는 `checked: Boolean`과 `onCheckedChange: (Boolean) -> Unit`입니다.

```kotlin
@Composable
fun CheckboxDemoApp(modifier: Modifier = Modifier) {
    var checked1 by remember { mutableStateOf(false) }
    var checked2 by remember { mutableStateOf(false) }
    var checked3 by remember { mutableStateOf(false) }
    Column(modifier = modifier) {
        Row {
            Checkbox(checked = checked1, onCheckedChange = { checked1 = it })
            IconToggleButton(checked = checked2, onCheckedChange = { checked2 = it }) {
                val imageVector = if (checked2)
                    Icons.Filled.CheckCircle
                else
                    Icons.Outlined.CheckCircle
                Icon(imageVector = imageVector, contentDescription = null)
            }
            Switch(checked = checked3, onCheckedChange = { checked3 = it })
        }
        Text(
            text = "1: $checked1, 2: $checked2, 3: $checked3",
            modifier = Modifier.background(if (checked1) Color.LightGray else Color.White),
        )
    }
}
```

- `onCheckedChange`의 `it`은 **새 체크 값(Boolean)**입니다.
- Kotlin의 `if`는 **식**이라 값을 돌려줍니다. 그래서 `if (checked1) Color.LightGray else Color.White`처럼 바로 인수로 쓸 수 있습니다.
- Switch 색: `colors = SwitchDefaults.colors(checkedThumbColor = Color.Green)`

### RadioButton

여러 라디오 버튼을 **그룹으로 묶고 그중 하나만** 선택합니다. 매개 변수는 `selected: Boolean`, `onClick`입니다.

```kotlin
@Composable
fun RadioButtonApp(modifier: Modifier = Modifier) {
    var color by remember { mutableStateOf(Color.Yellow) }
    Surface(modifier = modifier, color = color) {
        Column(modifier = Modifier.selectableGroup()) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                RadioButton(
                    selected = color == Color.Yellow,
                    onClick = { color = Color.Yellow },
                )
                Text(text = "Yellow")
            }
            Row(verticalAlignment = Alignment.CenterVertically) {
                RadioButton(
                    selected = color == Color.Cyan,
                    onClick = { color = Color.Cyan },
                )
                Text(text = "Cyan")
            }
        }
    }
}
```

- 상태는 **하나(`color`)**입니다. 각 버튼은 `selected = color == 내 색` 비교로 자기가 선택되었는지 판단합니다. 그래서 자동으로 하나만 선택됩니다.
- **`Modifier.selectableGroup()`**으로 묶습니다. 가로로 놓으려면 Column 대신 Row를 씁니다. [S14]

### 교재 연습문제 풀이

**3.1.1** Text를 기울임꼴로 하시오.

<details><summary>정답 보기</summary>

`fontStyle = FontStyle.Italic`

</details>

**3.1.3** Card를 클릭하면 Text의 수가 증가하게 하시오.

<details><summary>정답 보기</summary>

```kotlin
var n by remember { mutableStateOf(0) }
Card(onClick = { n++ }) {
    Text(text = "$n", fontSize = 32.sp, modifier = Modifier.padding(16.dp))
}
```

</details>

**3.1.6** [지우기]를 누르면 세 칸이 모두 지워지게 하시오.

<details><summary>정답 보기</summary>

```kotlin
Button(onClick = {
    op1 = ""
    op2 = ""
    result = ""
    error1 = false
}) { Text("지우기") }
```

</details>

**3.2.4** 모서리가 둥근 그림을 출력하시오.

<details><summary>정답 보기</summary>

```kotlin
Image(
    painter = painterResource(R.drawable.tree),
    contentDescription = null,
    modifier = Modifier.size(200.dp).clip(RoundedCornerShape(24.dp)),
    contentScale = ContentScale.Crop
)
```

</details>

**3.3.7 / 3.3.8** 라디오 버튼 [Magenta]를 추가하고 가로로 배치하시오.

<details><summary>정답 보기</summary>

```kotlin
Row(modifier = Modifier.selectableGroup()) {
    listOf(Color.Yellow to "Yellow", Color.Cyan to "Cyan", Color.Magenta to "Magenta")
        .forEach { (c, name) ->
            RadioButton(selected = color == c, onClick = { color = c })
            Text(text = name, modifier = Modifier.align(Alignment.CenterVertically))
        }
}
```

</details>

### 시험 대비: 빈칸 채우기

```kotlin
TextField(
    value = op1,
    onValueChange = {
        op1 = it
        error1 = op1.【①】() == null
    },
    modifier = Modifier.【②】(1.0f),          // 남은 폭 나누기
    label = { Text("첫째 수") },
    【③】 = error1,                           // 오류 모양
    keyboardOptions = KeyboardOptions(
        keyboardType = KeyboardType.【④】,     // 숫자 키패드
        imeAction = ImeAction.【⑤】            // 다음 칸으로
    ),
)
```

<details><summary>정답 보기</summary>

① `toDoubleOrNull` ② `weight` ③ `isError` ④ `Number` ⑤ `Next`

</details>

```kotlin
Image(
    painter = painterResource(R.drawable.tree),
    contentDescription = null,
    contentScale = ContentScale.【①】,          // 비율 유지 + 꽉 채우고 자르기
)
Checkbox(checked = checked1, 【②】 = { checked1 = it })
Column(modifier = Modifier.【③】()) {
    RadioButton(selected = color == Color.Yellow, 【④】 = { color = Color.Yellow })
}
```

<details><summary>정답 보기</summary>

① `Crop` ② `onCheckedChange` ③ `selectableGroup` ④ `onClick`

</details>

### 핵심 정리

- 글꼴: `res/font` + `FontFamily(Font(R.font.x), Font(R.font.y, FontWeight.Bold))`
- TextField: `label`, `isError`, `KeyboardOptions(keyboardType, imeAction)`, `readOnly`, `weight(1f)`
- 확장 아이콘: `material-icons-extended` 의존성 추가 후 **Sync Now**. 스타일은 Filled/Outlined/Sharp/TwoTone/Rounded
- ContentScale: **Fit(전체 보이기)·Crop(꽉 채워 자르기)·FillBounds(비율 무시)**
- 버튼 5종: Button·ElevatedButton·OutlinedButton·FilledTonalButton·TextButton
- Checkbox/IconToggleButton/Switch는 `checked + onCheckedChange`, RadioButton은 `selected + onClick + selectableGroup()`

---

# U04. 지연 구성 요소

### 오늘의 목표

- Column과 LazyColumn의 차이(성능)를 설명할 수 있다.
- 데이터 클래스와 리소스 아이디 목록으로 화면에 보일 자료를 준비할 수 있다.
- `LazyColumn { items(list) { … } }`로 스크롤 목록을 만들 수 있다.
- `item`, `items(개수)`, `items(리스트)`를 구분해서 쓸 수 있다.
- `LazyListScope.() -> Unit` 형식과 확장 함수의 의미를 설명할 수 있다.
- `LazyVerticalGrid`의 `GridCells.Fixed / FixedSize / Adaptive`를 구분할 수 있다.
- `animateContentSize(spring(…))`로 크기 변화에 스프링 애니메이션을 줄 수 있다.

### 왜 지연(Lazy) 구성 요소인가

- 항목 수가 적고 정해져 있으면 `Column` / `Row`로 충분합니다.
- 항목이 **많거나 개수가 정해지지 않은** 목록을 Column으로 만들면, 화면에 보이든 안 보이든 **모든 항목을 구성·배치**합니다. 그래서 성능 문제가 생깁니다.
- **지연 구성 요소(Lazy components)**는 **화면에 실제로 보이는 항목만** 구성합니다. 메모리와 성능 면에서 효율적이고, 스크롤도 기본으로 됩니다. [S15]

| 종류 | 세로 | 가로 |
|---|---|---|
| 지연 목록 (lazy list) | `LazyColumn` | `LazyRow` |
| 지연 그리드 (lazy grid) | `LazyVerticalGrid` | `LazyHorizontalGrid` |
| 높이/폭이 제각각인 그리드 | `LazyVerticalStaggeredGrid` | `LazyHorizontalStaggeredGrid` |

### LazyColumn 형식

```kotlin
@Composable
fun LazyColumn(
    modifier: Modifier = Modifier,
    state: LazyListState = rememberLazyListState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    verticalArrangement: Arrangement.Vertical =
        if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
    horizontalAlignment: Alignment.Horizontal = Alignment.Start,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    userScrollEnabled: Boolean = true,
    content: LazyListScope.() -> Unit
)
```

| 매개 변수 | 뜻 |
|---|---|
| `contentPadding` | 목록 내용 주변(start, top, end, bottom) 여백. 예: `PaddingValues(16.dp)` |
| `reverseLayout` | true면 목록 순서가 뒤집혀 출력 |
| `content` | **`LazyListScope.() -> Unit`** — 일반 Column과 달리 `@Composable`이 아님 |

### 자료 준비 — 데이터 클래스와 목록

프로젝트 4.1.1 LazyColumn Demo: 그림(A~L 12장)과 설명(Aaa…Lll)으로 된 카드 목록을 만듭니다.

1. 그림 `a.png` … `l.png`를 `res/drawable`에 넣습니다.
2. 설명 문자열을 `strings.xml`에 등록합니다.

```xml
<resources>
    <string name="app_name">LazyColumn Demo</string>
    <string name="a">Aaa</string>
    <string name="b">Bbb</string>
    <!-- ⋮ -->
    <string name="l">Lll</string>
</resources>
```

3. 패키지 `data`를 만듭니다: 패키지 디렉토리에서 마우스 오른쪽 → **New > Package** → `data`
4. `data`에 **데이터 클래스** `Letter`를 만듭니다: **New > Kotlin Class/File** → Data class

```kotlin
// app/.../data/Letter.kt
data class Letter(
    @DrawableRes val imageId: Int,       // 그림 아이디
    @StringRes val descriptionId: Int,   // 그림 설명 아이디
)

// app/.../data/Data.kt
val letters = listOf(
    Letter(R.drawable.a, R.string.a),
    Letter(R.drawable.b, R.string.b),
    // ⋮
    Letter(R.drawable.l, R.string.l),
)
```

- **데이터 클래스(data class)**는 자료를 담는 클래스입니다. `class` 앞에 `data`를 붙입니다. [S16]
- `@DrawableRes`는 그 Int가 drawable 리소스 아이디라는 표시이고, `@StringRes`는 문자열 리소스 아이디라는 표시입니다. 잘못된 종류의 아이디를 넣으면 편집기가 경고합니다.

[교육용 설명] 리소스 아이디(`R.drawable.a` 같은 것)는 사실 **Int**입니다. 그래서 그림 자체가 아니라 아이디만 목록에 담아 두고, 화면에 그릴 때 `painterResource(id)`, `stringResource(id)`로 꺼냅니다.

### LazyColumn으로 목록 출력

```kotlin
@Composable
fun LetterCard(letter: Letter, modifier: Modifier = Modifier) {
    Card(modifier = modifier) {
        Row(verticalAlignment = Alignment.Bottom) {
            Image(
                painter = painterResource(letter.imageId),
                contentDescription = null,
                modifier = Modifier.size(96.dp)
            )
            Text(
                text = stringResource(letter.descriptionId),
                modifier = Modifier.padding(8.dp),
                fontSize = 32.sp,
            )
        }
    }
}

@Composable
fun LetterCardList() {
    LazyColumn() {
        items(letters) { letter ->
            LetterCard(
                letter,
                modifier = Modifier.padding(8.dp).width(270.dp)
            )
        }
    }
}

@Composable
fun LazyColumnDemoApp() {
    Surface(modifier = Modifier.fillMaxSize().statusBarsPadding()) {
        LetterCardList()
    }
}
```

- `items(letters) { letter -> … }`: 목록의 원소마다 람다를 한 번씩 실행해 **항목 하나**를 만듭니다.
- 화면을 위로 밀면 목록이 스크롤됩니다. 화면 밖 항목은 보일 때가 되어서야 구성됩니다.

### item과 items — LazyListScope

`items()`라는 함수는 프로젝트 어디에도 선언되어 있지 않습니다. 이 함수는 어디서 왔을까요?

- LazyColumn의 마지막 매개 변수 형식은 **`LazyListScope.() -> Unit`**입니다. `LazyListScope`의 **멤버 함수(확장 함수)**라는 뜻입니다.
  1. `content`에는 LazyListScope의 멤버 함수를 대입합니다.
  2. LazyColumn은 자기가 가진 LazyListScope 객체로 그 함수를 호출합니다.
- 그래서 중괄호 안에서 `LazyListScope`의 함수 `item()`, `items()`를 그냥 부를 수 있습니다.

```kotlin
LazyColumn {
    item { Text(text = "First item") }              // 항목 1개 추가
    items(5) { i -> Text(text = "Item: $i") }       // 항목 5개 추가 (i = 0..4)
    item { Text(text = "Last item") }               // 항목 1개 추가
}
```

결과는 **모두 7개 항목**입니다: First item, Item: 0 ~ Item: 4, Last item

| 함수 | 추가하는 항목 |
|---|---|
| `item { }` | 1개 |
| `items(n) { i -> }` | n개 (인덱스 0 ~ n-1) |
| `items(list) { x -> }` | 리스트 원소 개수만큼 |

### Kotlin 확장 함수와 수신 객체 지정 함수 형식

- `(Int) -> Unit`은 보통 함수 형식입니다.
- **`Foo.(Int) -> Unit`**은 클래스(또는 인터페이스) `Foo`의 **멤버 함수** 형식입니다.
- **확장 함수(extension function)**는 클래스 밖에서 정의한 멤버 함수입니다. 마지막 매개 변수가 이런 형식이면, 호출하는 곳의 **후행 람다도 확장 함수**가 됩니다. 그래서 람다 안에서 `this`(그 객체)의 멤버를 바로 쓸 수 있습니다.

```kotlin
class A(val x: Int) {
    fun memberFun() {
        println("멤버 함수 $x")
    }
}

fun A.extensionFun() {
    println("확장 함수 $x")
}

fun f(parameterFun: A.() -> Unit) {
    val a = A(123)
    a.parameterFun()
}

fun main() {
    f(A::memberFun)                    // 멤버 함수 123
    f(A::extensionFun)                 // 확장 함수 123
    f() { println("후행 람다 $x") }     // 후행 람다 123  ← x는 A의 프로퍼티
}
```

### LazyRow

`LazyRow`는 LazyColumn의 가로/세로를 바꾼 것입니다. `LazyColumn`을 `LazyRow`로 바꾸면 **가로로 밀어서** 스크롤합니다.

### LazyVerticalGrid

항목이 많거나 개수가 정해지지 않은 **표**를 보여 줍니다. 항목의 폭과 높이는 모두 같습니다.

```kotlin
@Composable
fun LazyVerticalGrid(
    columns: GridCells,
    modifier: Modifier = Modifier,
    state: LazyGridState = rememberLazyGridState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    verticalArrangement: Arrangement.Vertical = …,
    horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    userScrollEnabled: Boolean = true,
    content: LazyGridScope.() -> Unit
)
```

`columns` 값

| 값 | 뜻 |
|---|---|
| `GridCells.Fixed(count)` | 한 행에 **항목 개수** 고정. 폭은 최대로 |
| `GridCells.FixedSize(size)` | 항목 **폭** 고정 |
| `GridCells.Adaptive(minSize)` | 폭이 **최소 minSize 이상**이 되도록 최대한 많이 배치. 남는 폭은 균등 분배 |

`Adaptive`는 화면 크기가 다양할 때 특히 유용합니다.

프로젝트 4.2.1 LazyVerticalGrid Demo (리소스·Letter·Data는 4.1.1과 같음)

```kotlin
@Composable
fun LetterCard(letter: Letter, modifier: Modifier = Modifier) {
    OutlinedCard(modifier = modifier) {
        Row(verticalAlignment = Alignment.Bottom) {
            Image(
                painter = painterResource(letter.imageId),
                contentDescription = null,
                modifier = Modifier.size(64.dp)
            )
            Text(
                text = stringResource(letter.descriptionId),
                modifier = Modifier.padding(8.dp),
                fontSize = 24.sp,
            )
        }
    }
}

@Composable
fun LetterCardGrid() {
    LazyVerticalGrid(
        columns = GridCells.Adaptive(minSize = 180.dp),
    ) {
        items(letters) { letter ->
            LetterCard(letter, modifier = Modifier.padding(8.dp).fillMaxWidth())
        }
    }
}
```

- `Adaptive(minSize = 180.dp)`: 폭이 180dp 이상인 항목을 최대한 배치합니다. 세로 화면에서는 2개가 들어가고, 남은 폭은 두 항목이 나눠 가집니다.
- `Fixed(2)`: 세로 모드에서는 같은 결과입니다. 하지만 **가로 모드로 돌리면** Adaptive는 열이 늘고 Fixed(2)는 2열 그대로입니다.
- 여기의 `items()`는 **`LazyGridScope.items()`**로, 4.1.1의 `LazyListScope.items()`와 다른 함수입니다.

### LazyHorizontalGrid

LazyVerticalGrid의 가로/세로를 바꾼 것입니다. 가로로 스크롤하고, 매개 변수 **`columns` 대신 `rows`**를 씁니다.

### 스프링 애니메이션

**스프링 애니메이션**은 스프링의 운동을 흉내 낸 **물리 기반 애니메이션**입니다. 움직임은 두 값으로 정해집니다.

| 값 | 뜻 | 상수 예 |
|---|---|---|
| **탄성** `dampingRatio` | 복원력 (얼마나 출렁이는가) | `Spring.DampingRatioNoBouncy`, `DampingRatioLowBouncy`, `DampingRatioMediumBouncy`, `DampingRatioHighBouncy` |
| **강도** `stiffness` | 버티는 힘 (얼마나 빨리 움직이는가) | `Spring.StiffnessLow`, `StiffnessMedium`, `StiffnessHigh` |

프로젝트 4.3.1 Spring Animation Demo: 아이콘 버튼으로 본문을 접고 펼 때 크기 변화가 부드럽게 움직입니다. (아이콘 때문에 `material-icons-extended` 의존성 필요)

```kotlin
@Composable
fun SpringAnimationDemoApp() {
    var expanded by remember { mutableStateOf(true) }
    Card {
        Column(
            modifier = Modifier.animateContentSize(
                animationSpec = spring(
                    dampingRatio = Spring.DampingRatioNoBouncy,
                    stiffness = Spring.StiffnessMedium
                )
            )
        ) {
            TitleBox(
                expanded = expanded,
                onClick = { expanded = !expanded },
                modifier = Modifier.fillMaxWidth()
            )
            if (expanded) Text(
                text = stringResource(R.string.content),
                textAlign = TextAlign.Justify,
            )
            Text(
                text = stringResource(R.string.author),
                modifier = Modifier.fillMaxWidth(),
                textAlign = TextAlign.End,
                fontSize = 20.sp
            )
        }
    }
}

@Composable
fun TitleBox(expanded: Boolean, onClick: () -> Unit, modifier: Modifier = Modifier) {
    Box(modifier = modifier, contentAlignment = Alignment.CenterEnd) {
        Text(
            text = stringResource(R.string.title),
            modifier = Modifier.fillMaxWidth(),
            textAlign = TextAlign.Center,
            fontSize = 24.sp
        )
        IconButton(onClick = onClick) {
            Icon(
                imageVector = if (expanded) Icons.Default.ExpandLess else Icons.Default.ExpandMore,
                contentDescription = null
            )
        }
    }
}
```

- 애니메이션을 만드는 코드는 **`Modifier.animateContentSize(animationSpec = spring(…))`** 하나입니다. 내용 크기가 바뀔 때(`if (expanded)`로 Text가 생기거나 없어질 때) 크기 변화가 애니메이션으로 보입니다.
- strings.xml에서 ` `은 공백, `\n`은 줄바꿈입니다. 문단 앞 들여쓰기에 씁니다.
- `DampingRatioHighBouncy`로 바꾸면 많이 출렁입니다(연습문제 4.3.1).

### 교재 연습문제 풀이

**4.1.1** LazyColumn에 contentPadding을 지정하시오.

<details><summary>정답 보기</summary>

`LazyColumn(contentPadding = PaddingValues(horizontal = 16.dp, vertical = 8.dp)) { … }`

</details>

**4.1.2 / 4.1.3** 그림과 카드를 둥글게 자르시오.

<details><summary>정답 보기</summary>

```kotlin
Image(…, modifier = Modifier.size(96.dp).clip(CircleShape))
Card(modifier = modifier.clip(RoundedCornerShape(topStart = 48.dp, bottomStart = 48.dp))) { … }
```

</details>

**4.1.4** IconButton을 누를 때마다 설명이 보였다 숨었다 하게 하시오.

<details><summary>정답 보기</summary>

```kotlin
@Composable
fun LetterCard(letter: Letter, modifier: Modifier = Modifier) {
    var expanded by remember { mutableStateOf(true) }
    Card(modifier = modifier) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Image(painterResource(letter.imageId), null, Modifier.size(96.dp))
            if (expanded) {
                Text(stringResource(letter.descriptionId), Modifier.padding(8.dp), fontSize = 32.sp)
            }
            Spacer(Modifier.weight(1f))
            IconButton(onClick = { expanded = !expanded }) {
                Icon(if (expanded) Icons.Filled.ExpandLess else Icons.Filled.ExpandMore, null)
            }
        }
    }
}
```

`remember`가 카드마다 따로 있으므로, 카드마다 펼침 상태를 따로 기억합니다.

</details>

**4.2.3** `GridCells.FixedSize(180.dp)`로 바꾸면 Adaptive와 무엇이 다른가?

<details><summary>정답 보기</summary>

FixedSize는 폭이 **정확히 180dp**로 고정되어, 남는 폭이 오른쪽에 빈 공간으로 남습니다. Adaptive는 남는 폭을 항목에 **균등 분배**해 화면을 꽉 채웁니다.

</details>

### 시험 대비: 빈칸 채우기

```kotlin
data class Letter(
    @【①】 val imageId: Int,
    @【②】 val descriptionId: Int,
)

@Composable
fun LetterCardList() {
    【③】 {
        【④】(letters) { letter ->
            LetterCard(letter)
        }
    }
}

LazyVerticalGrid(
    columns = GridCells.【⑤】(minSize = 180.dp),   // 최소 폭 이상으로 최대한 많이
) { items(letters) { LetterCard(it) } }
```

<details><summary>정답 보기</summary>

① `DrawableRes` ② `StringRes` ③ `LazyColumn` ④ `items` ⑤ `Adaptive`

</details>

### 핵심 정리

- 지연 구성 요소는 **보이는 항목만** 구성합니다. 많은 목록에는 Column 대신 LazyColumn을 씁니다.
- `LazyColumn { item { } ; items(n) { i -> } ; items(list) { x -> } }`
- content 형식 `LazyListScope.() -> Unit` → 람다 안에서 `items()`를 부를 수 있습니다(확장 함수).
- 데이터는 `data class` + 리소스 아이디(`@DrawableRes`, `@StringRes`) 목록으로 준비합니다.
- 그리드 열: `Fixed(개수)` / `FixedSize(폭)` / `Adaptive(최소 폭)`, 가로 그리드는 `rows`

---

# U05. 그래픽스

### 오늘의 목표

- `Canvas`의 `onDraw: DrawScope.() -> Unit` 형식을 설명할 수 있다.
- `drawText`·`TextMeasurer`로 문자열을, `drawLine/Rect/Oval/Circle/Path/Points`로 도형을 그릴 수 있다.
- Canvas 좌표는 **px** 단위임을 알고 `toPx()`·`toDp()`로 바꿀 수 있다.
- `drawImage`로 그림 전체나 일부를 그릴 수 있다.
- `translate`·`rotate`·`scale`·`withTransform`으로 변환할 수 있다.
- `drawBehind`·`drawWithContent`·`drawWithCache`의 차이를 설명할 수 있다.
- 프로세스·쓰레드·코루틴을 구분하고 `LaunchedEffect`·`rememberCoroutineScope`·`launch`·`Job`으로 코루틴을 만들고 제어할 수 있다.
- 코루틴과 Canvas로 캐릭터 애니메이션을 만들 수 있다.

### Canvas 기초

- `Canvas`는 그래픽 전용 컴포저블입니다. 문자열·도형·그림을 그립니다. **단독으로 쓰며 다른 컴포저블을 담을 수 없습니다.** [S17]

```kotlin
@Composable
fun Canvas(
    modifier: Modifier,
    onDraw: DrawScope.() -> Unit
)
```

- `onDraw`는 보통 **후행 람다**로 적습니다. 형식이 `DrawScope.() -> Unit`이므로, 람다 안에서 부르는 `drawText()`, `drawRect()` 같은 **`draw…()` 함수는 모두 `DrawScope`의 멤버 함수**입니다. U04의 `LazyListScope`와 같은 원리입니다.
- 좌표: Canvas의 **왼쪽 위가 (0, 0)**이고, 오른쪽이 +x, **아래쪽이 +y**입니다.
- 단위: 지금까지는 dp를 썼지만 **Canvas는 픽셀(px)**을 씁니다.

| 변환 | 코드 |
|---|---|
| dp → px | `16.dp.toPx()` |
| px → dp | `60f.toDp()` |

- dp는 기기마다 해상도와 밀도가 달라서 도입된 단위입니다. 그래서 px로 바꾼 값은 **기기마다 다릅니다.**
- `Offset(x, y)`는 점이나 벡터의 좌표입니다(Float). `Size(w, h)`는 크기입니다.

### 문자열 그리기 — drawText

프로젝트 5.1.1 Draw Text Demo

```kotlin
@Composable
fun DrawTextDemoApp(modifier: Modifier = Modifier) {
    val textMeasurer = rememberTextMeasurer()
    val textToDraw = "산은 높고 물은 깊어"
    Canvas(modifier = modifier) {
        drawText(
            textMeasurer = textMeasurer,
            text = textToDraw,
        )
        drawText(
            textMeasurer = textMeasurer,
            text = textToDraw,
            style = TextStyle(fontSize = 36.sp, color = Color.Magenta),
            topLeft = Offset(60f, 60f),
        )
        drawText(
            textMeasurer = textMeasurer,
            text = textToDraw,
            style = TextStyle(
                color = Color.Cyan,
                background = Color.Red.copy(alpha = 0.2f)
            ),
            topLeft = Offset(60f, 240f),
        )
    }
}
```

| 코드 | 뜻 |
|---|---|
| `rememberTextMeasurer()` | **TextMeasurer**: 글자마다 크기·위치를 정해 문자열 전체의 크기와 위치를 측정 |
| `style = TextStyle(…)` | 글꼴·크기·색·배경색 |
| `topLeft` | 문자열 왼쪽 위 모서리 위치 (px) |
| `Color.Red.copy(alpha = 0.2f)` | 빨강을 20% 불투명도로 복사 |

### 문자열 크기 재기 — TextLayoutResult

`textMeasurer.measure()`는 측정 결과를 **`TextLayoutResult`** 객체로 돌려줍니다. 여기에 문자열의 폭·높이·줄 위치 같은 레이아웃 정보가 들어 있습니다.

프로젝트 5.1.2 Text Layout Demo: 문자열을 Canvas 가운데에 놓고, 문자열 폭에 맞는 원을 그립니다.

```kotlin
@Composable
fun TextLayoutDemoApp() {
    val textMeasurer = rememberTextMeasurer()
    val textToDraw = "산은 높고\n물은 깊어"
    val style = TextStyle(fontSize = 24.sp, color = Color.Black)
    val textLayoutResult = textMeasurer.measure(textToDraw, style)
    Canvas(
        modifier = Modifier
            .size(200.dp, 200.dp)
            .background(Color.Red.copy(alpha = 0.2f))
    ) {
        drawCircle(
            color = Color.Blue,
            style = Stroke(width = 2f),
            center = center,
            radius = textLayoutResult.size.width / 2f
        )
        drawText(
            textMeasurer = textMeasurer,
            text = textToDraw,
            style = style,
            topLeft = Offset(
                x = center.x - textLayoutResult.size.width / 2f,
                y = center.y - textLayoutResult.size.height / 2f,
            )
        )
    }
}
```

- `center`: DrawScope의 프로퍼티로, **Canvas 중심 좌표(Offset)**입니다. `size`는 Canvas의 크기입니다.
- **가운데 정렬 공식**: `topLeft = center − (문자열 크기 / 2)`
- `textLayoutResult.lineCount`는 줄 수이고, `getLineBottom(i)`는 i번째 줄 바닥의 y 좌표입니다(연습문제 5.1.3, 5.1.6).

### 도형 그리기

프로젝트 5.1.3 Draw Shape Demo

```kotlin
@Composable
fun DrawShapeDemoApp(modifier: Modifier = Modifier) {
    Canvas(modifier = modifier) {
        drawLine(
            color = Color.Blue,
            start = Offset(20f, 30f),
            end = Offset(960f, 30f),
            strokeWidth = 10f
        )
        drawRect(
            color = Color.Red,
            topLeft = Offset(20f, 50f),
            size = Size(460f, 200f),
            style = Stroke(3f)            // 테두리만
        )
        drawRect(
            color = Color.Cyan,
            topLeft = Offset(30f, 60f),
            size = Size(440f, 180f),
            style = Fill                  // 채우기 (기본값)
        )
        drawOval(
            color = Color.Red,
            topLeft = Offset(500f, 50f),
            size = Size(460f, 200f),      // 이 직사각형에 내접하는 타원
            style = Stroke(3f)
        )
        drawCircle(
            color = Color.Cyan,
            radius = 100f,
            center = Offset(730f, 150f)
        )
        val path = Path().apply {
            moveTo(20f, 280f)             // 시작
            lineTo(480f, 280f)
            lineTo(20f, 480f)
            lineTo(480f, 480f)
            close()                       // 시작점으로 닫기
        }
        drawPath(path = path, color = Color.Magenta, style = Stroke(5f))
        val points = listOf(Offset(560f, 380f), Offset(730f, 380f), Offset(900f, 380f))
        drawPoints(
            points = points,
            pointMode = PointMode.Points,
            color = Color.Magenta,
            strokeWidth = 100f,
            cap = StrokeCap.Round         // 둥근 점
        )
    }
}
```

| 함수 | 위치를 정하는 매개 변수 |
|---|---|
| `drawLine` | `start`, `end`, `strokeWidth` |
| `drawRect` | `topLeft`, `size` |
| `drawOval` | `topLeft`, `size` (외접 직사각형) |
| `drawCircle` | `center`, `radius` |
| `drawPath` | `Path`의 `moveTo` → `lineTo` … → `close()` |
| `drawPoints` | `points`(Offset 목록), `pointMode` |

- `style = Stroke(굵기)`는 테두리만 그리고, `style = Fill`(기본값)은 안을 채웁니다.
- `Path().apply { … }`: `apply` 블록 안에서는 Path의 멤버 함수를 바로 부릅니다. 그리고 그 Path 객체가 돌아옵니다.

### 그림 그리기 — drawImage

프로젝트 5.1.4 Draw Image Demo

```kotlin
@Composable
fun DrawImageDemoApp(modifier: Modifier = Modifier) {
    val imageBitmap = ImageBitmap.imageResource(R.drawable.image)
    Canvas(modifier = modifier) {
        drawImage(                                   // ① 전체를 원래 크기로
            image = imageBitmap,
            topLeft = Offset(32f, 32f),
        )
        drawImage(                                   // ② 일부를 잘라 확대
            image = imageBitmap,
            srcOffset = IntOffset(x = 0, y = imageBitmap.height / 2),
            srcSize = IntSize(width = imageBitmap.width / 2, height = imageBitmap.height / 2),
            dstOffset = IntOffset(x = 32 + imageBitmap.width, y = 32),
            dstSize = IntSize(width = imageBitmap.width, height = imageBitmap.height),
        )
    }
}
```

- `ImageBitmap.imageResource(R.drawable.x)`로 비트맵을 불러옵니다.
- `drawImage()`는 두 가지 형태로 **오버로딩**되어 있습니다.
  1. 그림 전체를 원래 크기로, 위치(`topLeft`)만 지정
  2. 그림 일부를 확대·축소: **`src…` = 원본 그림 쪽**, **`dst…` = Canvas 쪽**
- ②는 원본의 **왼쪽 아래 1/4**(x 0부터, y 절반부터, 폭·높이 절반)을 잘라 원본 크기로 **2배 확대**해 그립니다.

### 변환 — translate · rotate · scale

**변환**은 문자열·도형·그림을 평행 이동·회전·확대/축소해서 그리는 것입니다.

프로젝트 5.1.5 Transform Demo

```kotlin
@Composable
fun TransformDemoApp(modifier: Modifier = Modifier) {
    val imageBitmap = ImageBitmap.imageResource(R.drawable.fractal)
    Canvas(modifier = modifier) {
        translate(left = 100f, top = 100f) {
            drawCircle(color = Color.Cyan, radius = 100f, center = Offset(0f, 0f))
        }
        rotate(degrees = 15f) {
            drawImage(image = imageBitmap)
        }
        scale(scale = 0.8f) {
            drawImage(image = imageBitmap)
        }
        withTransform(
            transformBlock = {
                scale(scale = 0.9f)
                rotate(degrees = 30f)
            }
        ) {
            drawRect(
                color = Color.Red.copy(alpha = 0.6f),
                topLeft = Offset(0f, 0f),
                size = Size(400f, 300f)
            )
        }
    }
}
```

| 함수 | 효과 | 기준 |
|---|---|---|
| `translate(left = 100f, top = 100f) { }` | 오른쪽으로 100, 아래로 100 **평행 이동** | 좌표계를 옮긴다고 봄 |
| `rotate(degrees = 15f) { }` | **시계 방향** 15° 회전 | 중심은 **Canvas 중심**. 바꾸려면 `pivot = Offset(…)` |
| `scale(scale = 0.8f) { }` | 크기를 80%로 | 중심은 Canvas 중심 |
| `withTransform({ … }) { }` | 여러 변환을 **연속** 적용 | |

- 첫 번째 원은 중심이 (0,0)이지만 translate 때문에 (100,100)에 그려집니다.
- 그림 중심을 기준으로 돌리려면 `rotate(15f, pivot = Offset(imageBitmap.width / 2f, imageBitmap.height / 2f))`처럼 씁니다(연습문제 5.1.10).

### 그래픽 수정자

Canvas는 Text 같은 컴포저블을 담을 수 없습니다. 그래서 **일반 컴포저블 위에 그림을 그리는** 수정자가 따로 있습니다. 그리는 방법은 Canvas와 같습니다.

| 수정자 | 그리는 위치 |
|---|---|
| `drawBehind { }` | 컴포저블의 **배경** (내용 뒤) |
| `drawWithContent { }` | 내용과 그림을 **적은 순서대로** (`drawContent()`로 내용 그리기) |
| `drawWithCache { }` | 그릴 때 만든 객체(Brush·Shader·Path)를 **저장해 재사용** → 성능 개선 |

**drawBehind** — 프로젝트 5.2.1: Text 배경에 그래디언트를 그립니다. [S18]

```kotlin
@Composable
fun DrawBehindDemoApp() {
    Text(
        text = "산은 높고 물은 깊어",
        modifier = Modifier
            .wrapContentSize()
            .drawBehind {
                drawRect(
                    brush = Brush.horizontalGradient(listOf(Color.Cyan, Color.Yellow))
                )
            },
        fontSize = 48.sp
    )
}
```

**drawWithContent** — 프로젝트 5.2.2

```kotlin
@Composable
fun DrawWithContentDemoApp() {
    Column(
        modifier = Modifier
            .wrapContentSize()
            .drawWithContent {
                drawRect(Color.Magenta)               // ① 바탕
                drawContent()                         // ② 내용(Text)
                drawRect(                             // ③ 내용 위를 덮음
                    Brush.radialGradient(
                        listOf(Color.Transparent, Color.Yellow),
                        center = center,
                        radius = size.height / 2
                    )
                )
            }
    ) {
        Text(text = stringResource(R.string.content))
    }
}
```

- `drawContent()`가 두 `drawRect()` **사이**에 있으므로, 내용은 마지막 사각형에 덮입니다.
- `Brush.radialGradient`는 중심에서 원형으로 퍼지는 그래디언트입니다. 중심은 `Transparent`(투명)이고 반지름 밖은 `Yellow`이므로, **가운데 글자만 보입니다.**
- `drawWithCache`는 그리기 영역 크기가 같고, 읽은 상태가 바뀌지 않는 동안 만든 객체를 유지합니다.

### 코루틴이란

| 단위 | 뜻 |
|---|---|
| **프로세스(process)** | 컴퓨터에서 독립적으로 실행되는 단위 (보통 앱 하나 = 프로세스 하나) |
| **쓰레드(thread)** | 프로세스 안에서 독립적으로 실행되는 단위 (한 프로세스에 여러 개) |
| **코루틴(coroutine)** | 쓰레드 안에서 독립적으로 실행되는 단위 |

- 코루틴으로 **비동기 작업**을 합니다. 한 작업이 끝나기를 기다리지 않고 다음 작업을 시작하므로, 여러 작업이 동시에 실행되는 것처럼 보입니다. [S19]
- **왜 필요한가?** 메인 쓰레드가 다운로드에만 매달리면 사용자 입력을 못 받아 앱이 멈춘 것처럼 보입니다. 코루틴은 다운로드하는 틈틈이 입력을 받게 해 줍니다.
- 예전에는 쓰레드를 새로 만들었지만 비용이 큽니다. 코루틴은 **쓰레드 안에서 돌아 가볍습니다.**
- `suspend` 키워드: **코루틴에서 실행되는(일시 중단 가능한) 함수**라는 표시입니다. `delay()`도 suspend 함수입니다.

### LaunchedEffect

```kotlin
@Composable
fun LaunchedEffect(
    vararg keys: Any?,
    block: suspend CoroutineScope.() -> Unit
)
```

- 컴포저블 안에서 코루틴을 실행합니다. `block`을 다 실행하면 코루틴이 끝납니다.
- **`keys` 값이 바뀌면 실행 중이던 코루틴을 취소하고 새 코루틴을 시작합니다.** 키 개수에는 제한이 없습니다.
- 키가 절대 바뀌지 않게 하려면 **`Unit`**을 넣습니다. 그러면 **한 번만** 실행됩니다.

프로젝트 5.3.1 LaunchedEffect Demo: 배경이 점점 투명해집니다.

```kotlin
@Composable
fun LaunchedEffectDemoApp(modifier: Modifier = Modifier) {
    var alpha by remember { mutableFloatStateOf(1.0f) }
    LaunchedEffect(Unit) {
        while (alpha > 0) {
            delay(500)                                     // 0.5초 쉼
            alpha = MathUtils.clamp(alpha - 0.1f, 0f, 1f)  // 0.1씩 감소
        }
    }
    Text(
        text = "산은 높고 물은 깊어",
        modifier = modifier.background(color = Color.Red.copy(alpha = alpha)),
        fontSize = 36.sp
    )
}
```

- `mutableFloatStateOf`는 Float 전용 상태입니다. Int 전용은 `mutableIntStateOf`입니다.
- `clamp(x, 0f, 1f)`: x가 0보다 작으면 0, 1보다 크면 1을 돌려줍니다. **범위를 제한**할 때 씁니다.
- alpha가 0이 되면 while이 끝나고 코루틴도 끝납니다.

### 코루틴 제어 — 키로 시작·멈춤

프로젝트 5.3.2 Coroutine Control Demo

```kotlin
@Composable
fun CoroutineControlDemoApp(modifier: Modifier = Modifier) {
    var alpha by remember { mutableFloatStateOf(1.0f) }
    var isRunning by remember { mutableStateOf(false) }
    LaunchedEffect(isRunning) {          // isRunning의 값이 바뀌면 다시 시작한다
        if (isRunning) {
            while (alpha > 0) {
                delay(500)
                alpha = MathUtils.clamp(alpha - 0.1f, 0f, 1f)
            }
            isRunning = false
        }
        // isRunning이 false이면 아무것도 하지 않고 코루틴을 종료한다
    }
    Column(modifier = modifier) {
        Text(
            text = "산은 높고 물은 깊어",
            modifier = Modifier.background(color = Color.Red.copy(alpha = alpha)),
            fontSize = 36.sp
        )
        Row {
            Button(onClick = {
                alpha = 1f
                isRunning = true         // 코루틴 다시 시작
            }) { Text("시작") }
            Button(onClick = {
                isRunning = false        // 코루틴 취소
            }) { Text("멈춤") }
        }
    }
}
```

| 키 변화 | 일어나는 일 |
|---|---|
| false → true ([시작]) | 이전 코루틴 취소 → 새 코루틴이 `if (isRunning)` 안의 루프 실행 |
| true → false ([멈춤]) | 실행 중인 루프 코루틴 **취소** → 새 코루틴은 if를 건너뛰고 바로 끝 |

- [계속] 버튼은 `alpha = 1f` 없이 `isRunning = true`만 하면 됩니다. alpha가 멈춘 값에서 이어집니다(연습문제 5.3.2).

### 여러 코루틴 — launch

LaunchedEffect 안에서 **`launch { }`**를 부르면 코루틴이 **하나 더** 생깁니다.

프로젝트 5.3.3 Multi Coroutine Demo

```kotlin
@Composable
fun MultiCoroutineDemoApp(modifier: Modifier = Modifier) {
    var alpha by remember { mutableStateOf(1.0f) }
    var fontSize by remember { mutableStateOf(18) }
    LaunchedEffect(Unit) {
        launch {                         // 코루틴 하나 더 만들기
            while (alpha > 0) {
                delay(500)
                alpha = MathUtils.clamp(alpha - 0.1f, 0f, 1f)
            }
        }
        while (fontSize < 36) {
            delay(500)
            fontSize += 2
        }
    }
    Text(
        text = "산은 높고 물은 깊어",
        modifier = modifier.background(color = Color.Red.copy(alpha = alpha)),
        fontSize = fontSize.sp
    )
}
```

- 두 코루틴(LaunchedEffect의 것, launch의 것)이 **비동기로 동시에** 돌기 때문에, 투명도와 글자 크기가 함께 변합니다.
- 두 루프를 모두 `launch`로 감싸면 코루틴은 3개가 됩니다. 바깥 코루틴은 launch만 두 번 하고 끝나므로 결과는 같습니다.
- **주의(연습문제 5.3.5)**: `while (alpha > 0) {…}`를 `launch` **앞에** 두면, 그 루프가 끝난 뒤에야 launch가 실행됩니다. 그래서 투명해진 **다음에** 글자가 커집니다.

### CoroutineScope와 Job

`LaunchedEffect`는 컴포저블이라 **컴포저블 안에서만** 쓸 수 있습니다. 버튼 `onClick` 같은 **컴포저블 밖**(이벤트 처리 함수)에서 코루틴을 시작하려면 **CoroutineScope** 객체를 씁니다.

프로젝트 5.3.4 CoroutineScope Demo

```kotlin
@Composable
fun CoroutineScopeDemoApp() {
    val scope = rememberCoroutineScope()
    var count by remember { mutableIntStateOf(0) }
    Button(
        onClick = {
            scope.launch {
                count = 0
                while (count < 10) {
                    delay(500)
                    count++
                }
            }
        }
    ) { Text("count: $count") }
}
```

`launch()`는 **`Job`** 객체를 돌려줍니다. Job은 백그라운드 작업을 나타내고, **`cancel()`**로 코루틴을 취소합니다. [S20]

프로젝트 5.3.5 Job Demo

```kotlin
@Composable
fun JobDemoApp() {
    val scope = rememberCoroutineScope()
    var count by remember { mutableStateOf(0) }
    var job: Job by remember { mutableStateOf(Job()) }
    Row(verticalAlignment = Alignment.CenterVertically) {
        Text("count: $count")
        Button(onClick = {
            if (job.isActive)
                job.cancel()                 // 돌던 것이 있으면 취소
            job = scope.launch {
                count = 0
                while (count < 10) {
                    delay(500)
                    count++
                }
            }
        }) { Text("시작") }
        Button(onClick = {
            if (job.isActive)
                job.cancel()
        }) { Text("멈춤") }
    }
}
```

| 방법 | 어디서 | 언제 쓰나 |
|---|---|---|
| `LaunchedEffect(key) { }` | 컴포저블 본문 | 컴포저블 **생명 주기와 함께** 도는 작업 (예: 게임 배경 스크롤) |
| `rememberCoroutineScope().launch { }` | `onClick` 같은 이벤트 | **사용자 동작에 반응**하는 일시적인 작업 |

### 그래픽 애니메이션 — 캐릭터 걷기

프로젝트 5.4.1 Character Animation Demo: 그림 4장(`char0` ~ `char3`)을 번갈아 그리고, 화면을 누르면 오른쪽으로 걸어갑니다.

```kotlin
@Composable
fun CharacterAnimationDemoApp() {
    val images = arrayOf(
        ImageBitmap.imageResource(R.drawable.char0),
        ImageBitmap.imageResource(R.drawable.char1),
        ImageBitmap.imageResource(R.drawable.char2),
        ImageBitmap.imageResource(R.drawable.char3)
    )
    var moveImage = false
    var topLeft by remember { mutableStateOf(Offset(200f, 300f)) }
    var index by remember { mutableIntStateOf(0) }
    val radius = images[0].width.toFloat() / 2
    val step = Math.PI.toFloat() * radius / 2
    LaunchedEffect(Unit) {
        while (true) {
            delay(100)
            index = (index + 1) % images.size            // 0→1→2→3→0 …
            if (moveImage) {
                topLeft = topLeft.copy(x = topLeft.x + step)
                if (topLeft.x > 1000)
                    break
            }
        }
    }
    Canvas(
        modifier = Modifier
            .fillMaxSize()
            .pointerInput(Unit) {
                detectTapGestures(onTap = { _ -> moveImage = true })
            },
    ) {
        drawImage(image = images[index], topLeft = topLeft)
    }
}
```

| 코드 | 뜻 |
|---|---|
| `index = (index + 1) % images.size` | 0.1초마다 다음 그림으로 바꾸고, 끝에 가면 0으로 돌아감 |
| `topLeft.copy(x = …)` | Offset의 x만 바꾼 새 객체 → 상태가 바뀌어 다시 그려짐 |
| `Modifier.pointerInput(Unit) { detectTapGestures(onTap = …) }` | Canvas의 **탭(터치) 처리** |
| `_ ->` | 쓰지 않는 매개 변수(탭 위치) |

### 교재 연습문제 풀이

**5.1.2** (60f, 240f)를 dp로 바꾸어 Toast로 출력하시오.

<details><summary>정답 보기</summary>

```kotlin
val context = LocalContext.current
Canvas(modifier) {
    val x = 60f.toDp()
    val y = 240f.toDp()
    Toast.makeText(context, "($x, $y)", Toast.LENGTH_LONG).show()
    // ⋮
}
```

`toDp()`는 Density 범위(DrawScope 안)에서 쓸 수 있습니다.

</details>

**5.1.5** 타원에 외접하는 직사각형을 그리시오.

<details><summary>정답 보기</summary>

타원과 같은 `topLeft`, `size`로 사각형을 그립니다.

```kotlin
drawRect(color = Color.Blue, topLeft = Offset(500f, 50f), size = Size(460f, 200f), style = Stroke(2f))
```

</details>

**5.1.8** 그림의 오른쪽 아래 1/4을 출력하시오.

<details><summary>정답 보기</summary>

```kotlin
drawImage(
    image = imageBitmap,
    srcOffset = IntOffset(imageBitmap.width / 2, imageBitmap.height / 2),
    srcSize = IntSize(imageBitmap.width / 2, imageBitmap.height / 2),
    dstOffset = IntOffset(32, 64 + imageBitmap.height),
    dstSize = IntSize(imageBitmap.width / 2, imageBitmap.height / 2),
)
```

</details>

**5.1.11** 문자열을 180도 돌려 출력하시오.

<details><summary>정답 보기</summary>

```kotlin
rotate(degrees = 180f) {
    drawText(textMeasurer, "산은 높고 물은 깊어", topLeft = Offset(60f, 60f))
}
```

</details>

**5.3.3** `isRunning`의 초깃값을 true로 바꾸면?

<details><summary>정답 보기</summary>

앱을 켜자마자 첫 코루틴이 `if (isRunning)`을 통과하므로, [시작]을 누르지 않아도 **바로 투명해지기 시작합니다.**

</details>

**5.3.8** Job Demo에 [계속] 버튼을 추가하시오.

<details><summary>정답 보기</summary>

```kotlin
Button(onClick = {
    if (!job.isActive)
        job = scope.launch {
            while (count < 10) {     // count = 0 없이 이어서
                delay(500)
                count++
            }
        }
}) { Text("계속") }
```

</details>

### 시험 대비: 빈칸 채우기

```kotlin
val textMeasurer = 【①】()
Canvas(modifier = Modifier.fillMaxSize()) {
    drawCircle(color = Color.Blue, 【②】 = 100f, center = 【③】)   // Canvas 중심
    drawRect(color = Color.Red, topLeft = Offset(20f, 50f),
             size = Size(460f, 200f), style = 【④】(3f))        // 테두리만
    【⑤】(degrees = 15f) { drawImage(image = imageBitmap) }     // 회전
}
```

<details><summary>정답 보기</summary>

① `rememberTextMeasurer` ② `radius` ③ `center` ④ `Stroke` ⑤ `rotate`

</details>

```kotlin
var alpha by remember { mutableFloatStateOf(1.0f) }
var isRunning by remember { mutableStateOf(false) }
【①】(isRunning) {                    // 키가 바뀌면 재시작
    if (isRunning) {
        while (alpha > 0) {
            【②】(500)                 // 0.5초 쉼
            alpha = MathUtils.clamp(alpha - 0.1f, 0f, 1f)
        }
    }
}
val scope = 【③】()
var job: Job by remember { mutableStateOf(Job()) }
Button(onClick = {
    if (job.isActive) job.【④】()
    job = scope.【⑤】 { … }
}) { Text("시작") }
```

<details><summary>정답 보기</summary>

① `LaunchedEffect` ② `delay` ③ `rememberCoroutineScope` ④ `cancel` ⑤ `launch`

</details>

### 핵심 정리

- `Canvas { }` 안의 `draw…()`는 **DrawScope의 멤버**입니다. 좌표는 **px**, 왼쪽 위가 (0,0)입니다.
- 도형: `drawLine/Rect/Oval/Circle/Path/Points`. `Stroke`는 테두리, `Fill`은 채우기입니다.
- `drawImage`: 전체(`topLeft`) / 일부(`src…` 원본 → `dst…` Canvas)
- 변환: `translate`, `rotate`(시계 방향·Canvas 중심), `scale`, `withTransform`
- 그래픽 수정자: `drawBehind`(배경), `drawWithContent`(순서·`drawContent()`), `drawWithCache`(재사용)
- 코루틴: `LaunchedEffect(key)`는 **키가 바뀌면 재시작**, `Unit`이면 1회. 이벤트에서는 `rememberCoroutineScope().launch {}`, 취소는 `Job.cancel()`

---

# U06. 상태

### 오늘의 목표

- 상태·컴포지션·리컴포지션의 관계를 설명할 수 있다.
- `remember`가 리컴포지션 때 다시 실행되지 않고 값을 유지함을 Log로 확인할 수 있다.
- `mutableStateOf`로 상태를 만드는 세 가지 방법과 `by`(위임)의 뜻을 설명할 수 있다.
- `rememberSaveable`로 화면 회전에도 상태를 보존할 수 있다.
- `KeyboardActions(onDone)`와 `LocalFocusManager`로 입력 완료를 처리할 수 있다.
- 상태 호이스팅으로 스테이트풀/스테이트리스 컴포저블을 나눌 수 있다.
- `ViewModel` + `MutableStateFlow`/`StateFlow` + `collectAsState()`로 상태를 UI와 분리할 수 있다.

### 상태란

- **상태(state)**는 시간이 지나면서 값이 바뀌는 변수입니다. 실행 결과나 사용자 입력으로 바뀝니다. [S21]
  - 예: 사용자가 입력하면 TextField의 상태가 바뀝니다. TextField를 담은 컨테이너의 상태도 함께 바뀝니다.

| 용어 | 뜻 |
|---|---|
| **컴포지션** (컴포저블을 구성한다) | 앱 시작이나 화면 전환 때 UI를 **처음 만드는** 것 |
| **리컴포지션** (다시 구성한다) | 컴포저블은 그대로 두고 **바뀐 상태만 반영해 다시 출력**하는 것. 바뀐 것만 고침 |

### remember의 동작

- `remember()`는 변수에 저장된 값을 **기억**합니다.
  - 컴포저블이 **화면에 있는 동안** 유지되고, **리컴포지션되어도 유지**됩니다.
  - 화면을 전환해 컴포저블이 **제거되면 기억이 사라집니다.**

프로젝트 6.1.1 Remember Demo

```kotlin
class Memorized {
    var x by mutableIntStateOf(0)
    init {
        Log.d("Remember Demo", "Memorized 시작")
    }
}

@Composable
fun RememberDemoApp(modifier: Modifier = Modifier) {
    Log.d("Remember Demo", "RememberDemoApp 시작")
    val memorized: Memorized = remember { Memorized() }
    Column(modifier) {
        Button(onClick = { memorized.x++ }) {
            Text("x 증가")
        }
        Text("x: ${memorized.x}")
    }
}
```

- Kotlin 클래스의 `init` 블록은 **객체가 생성될 때마다** 실행됩니다.
- [x 증가]를 누르면 상태 x가 바뀌므로 `RememberDemoApp()`이 다시 실행됩니다(리컴포지션).
  - Logcat: `RememberDemoApp 시작`은 **누를 때마다** 찍힙니다.
  - `Memorized 시작`은 **처음 한 번만** 찍힙니다. remember가 기억해 둔 객체를 다시 쓰기 때문입니다.
- 정수 상태에는 `mutableIntStateOf()`를 쓰는 것이 좋습니다. `mutableStateOf()`는 래퍼 클래스(Integer)를 쓰지만, 이것은 **기본 형식**을 써서 저장 공간을 줄입니다. 결과는 같습니다. `mutableFloatStateOf()`, `mutableDoubleStateOf()`도 있습니다.

### 상태 객체와 세 가지 선언 방법

- `State<T>`는 상태를 나타냅니다. 값을 바꿀 수 있는 상태는 파생 인터페이스 **`MutableState<T>`**입니다.

```kotlin
interface MutableState<T> : State<T> {
    override var value: T
}
```

- `mutableStateOf(초깃값)`이 MutableState 객체를 만들고, 초깃값은 **`value`**에 저장됩니다.
- MutableState는 `value`를 **관찰**하다가 값이 바뀌면 그 값을 쓰는 컴포저블을 리컴포지션합니다.

| 선언 | 읽기 / 쓰기 |
|---|---|
| `var value by remember { mutableStateOf(…) }` | `value` / `value = 새값` (getValue·setValue import 필요) |
| `val value = remember { mutableStateOf(…) }` | `value.value` / `value.value = 새값` |
| `val (value, setValue) = remember { mutableStateOf(…) }` | `value` / `setValue(새값)` |

세 방법은 사용법만 다르고 실제로는 차이가 없습니다.

### Kotlin by — 위임

`by`는 **위임**을 뜻합니다. 변수의 값을 다른 객체가 정해 주게 합니다.

```kotlin
class A(var value: Int) {
    operator fun getValue(nothing: Nothing?, property: KProperty<*>): String {
        return value.toString()
    }
    operator fun setValue(nothing: Nothing?, property: KProperty<*>, s: String) {
        value = s.toInt()
    }
}

fun main() {
    val a = A(10)
    var str: String by a
    println(str)        // 10
    str = "123"
    println(a.value)    // 123  ← str을 바꾸면 a.value가 바뀜
    a.value = 456
    println(str)        // 456  ← a.value를 바꾸면 str이 바뀜
}
```

- `getValue()`는 값을 읽을 때, `setValue()`는 값을 쓸 때 호출됩니다.
- `var value by remember { mutableStateOf("") }`의 `value`는 겉보기에는 String이지만, 실제로는 **MutableState<String> 객체가 숨어서 내보내는 값**입니다. 그래서 `.value` 없이 바로 씁니다.

### rememberSaveable — 회전에도 유지

- 기기를 **회전**하면 UI가 초기화되고, `remember`로 기억한 값도 **사라집니다.**
- **`rememberSaveable`**은 상태를 **Bundle**에 저장합니다. 회전 뒤에도 복원되고, 시스템이 앱을 **강제 종료**했을 때도 보존됩니다.
  - **사용자가 직접 종료**한 경우에는 복원되지 않습니다.
  - Int·String 같은 기본 형식은 자동으로 저장됩니다. 클래스 같은 복합 형식은 **Parcelable**로 바꾸거나 **Saver**를 써야 합니다. [S22]

프로젝트 6.1.2 Save Ui Demo

```kotlin
@Composable
fun SaveUiDemoApp(modifier: Modifier = Modifier) {
    var input by remember { mutableStateOf("") }
    var text by rememberSaveable { mutableStateOf("") }
    val focusManager = LocalFocusManager.current
    Column(modifier = modifier) {
        TextField(
            value = input,
            onValueChange = { input = it },
            singleLine = true,
            keyboardOptions = KeyboardOptions.Default.copy(imeAction = ImeAction.Done),
            keyboardActions = KeyboardActions(
                onDone = {
                    text = input
                    input = ""
                    focusManager.clearFocus()
                }
            )
        )
        Text(text = text)
    }
}
```

| 코드 | 뜻 |
|---|---|
| `singleLine = true` | 한 줄 입력 |
| `KeyboardActions(onDone = { … })` | 키보드 **[Done]**을 눌렀을 때 할 일 |
| `LocalFocusManager.current` | 포커스 관리자를 프로퍼티 `current`로 가져옴 |
| `focusManager.clearFocus()` | 포커스를 없애 **키보드를 숨김** |

- `text`는 `rememberSaveable`이라 회전해도 남고, `input`은 `remember`라 회전하면 지워집니다.

### 상태 호이스팅

코드가 길어지면 컴포저블을 나눕니다. 그런데 버튼은 `InputArea`에, 글자는 `OutputArea`에 있으면, **InputArea가 바꾼 글꼴 크기를 OutputArea가 어떻게 알까요?**

프로젝트 6.1.3 State Hoisting Demo

```kotlin
@Composable
fun InputArea(onClick: () -> Unit) {
    OutlinedButton(onClick = onClick) { Text("글꼴 크기 증가") }
}

@Composable
fun OutputArea(fontSize: Int) {
    Text(text = "산은 높고 물은 깊어", fontSize = fontSize.sp)
}

@Composable
fun StateHoistingDemoApp(modifier: Modifier = Modifier) {
    var fontSize by remember { mutableStateOf(16) }
    Row(modifier = modifier) {
        InputArea(onClick = { fontSize++ })
        OutputArea(fontSize)
    }
}
```

- 상태 `fontSize`를 **두 컴포저블을 부르는 위쪽(StateHoistingDemoApp)**에서 관리합니다.
  - 아래로는 **값**(`fontSize`)을 내려 주고, 위로는 **이벤트**(`onClick`)를 올려받습니다.

| 용어 | 뜻 | 프로젝트 6.1.3 |
|---|---|---|
| **스테이트풀(stateful)** | 상태를 바꾸는(관리하는) 컴포저블 | `StateHoistingDemoApp` |
| **스테이트리스(stateless)** | 관리하는 상태가 없는 컴포저블 | `InputArea`, `OutputArea` |
| **상태 호이스팅(state hoisting)** | 상태를 자기 대신 **호출하는 곳에서** 관리하게 올리는 것 ("상태 올리기") | |

- 상태는 이벤트 때문에 바뀝니다. 그래서 호이스팅은 상태만 올리는 것이 아니라 **이벤트 처리도 위임**합니다.

[교육용 설명] 호이스팅 공식: 컴포저블 `Foo(value: T, onValueChange: (T) -> Unit)`. TextField가 바로 이 모양입니다. TextField는 스테이트리스이고, 상태는 부르는 쪽이 갖습니다.

### 대화 상자 입력 받기 — 호이스팅 활용

대화 상자를 따로 컴포저블로 만들면, 거기서 입력한 내용을 가져오는 데 호이스팅이 필요합니다.

프로젝트 6.1.4 Input Dialog Demo

```kotlin
@Composable
fun InputDialogDemoApp(modifier: Modifier = Modifier) {
    var showDialog by remember { mutableStateOf(false) }
    var name by remember { mutableStateOf("") }
    var inputValue by remember { mutableStateOf("") }
    if (showDialog) {
        InputDialog(
            value = inputValue,
            onValueChange = { value -> inputValue = value },
            onCancel = {
                inputValue = ""
                showDialog = false
            },
            onOk = {
                name = inputValue
                inputValue = ""
                showDialog = false
            }
        )
    }
    Row(modifier) {
        TextButton(onClick = { showDialog = true }) { Text("이름: ", fontSize = 24.sp) }
        Text(name, fontSize = 24.sp)
    }
}

@Composable
fun InputDialog(
    value: String,
    onValueChange: (String) -> Unit,
    onCancel: () -> Unit,
    onOk: () -> Unit
) {
    Dialog(onDismissRequest = onCancel) {
        Card(modifier = Modifier.height(200.dp)) {
            Column(
                modifier = Modifier.fillMaxSize().padding(16.dp),
                verticalArrangement = Arrangement.Center
            ) {
                OutlinedTextField(
                    value = value,
                    onValueChange = onValueChange,
                    modifier = Modifier.padding(16.dp)
                )
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.Center
                ) {
                    TextButton(onClick = onCancel, modifier = Modifier.padding(16.dp, 0.dp)) { Text("취소") }
                    TextButton(onClick = onOk, modifier = Modifier.padding(16.dp, 0.dp)) { Text("확인") }
                }
            }
        }
    }
}
```

- `InputDialog`는 **스테이트리스**입니다. 입력한 문자열은 위로 올라가 `InputDialogDemoApp`의 `inputValue`에 저장됩니다.
- [확인]을 누를 때만 `name = inputValue`가 되고, [취소]면 버려집니다.

### 아키텍처와 ViewModel

- **아키텍처(architecture)**는 앱의 설계 원칙과 구조를 정한 규칙 집합으로, 건물의 청사진과 비슷합니다. 좋은 아키텍처는 견고성·유연성·확장성을 높이고 유지보수를 쉽게 합니다.
- **자료와 UI를 분리**하면 서로 간섭 없이 고칠 수 있고, 구조가 명확해집니다.
- **ViewModel**은 Jetpack 아키텍처 구성 요소로, **UI 관련 자료를 저장·관리**합니다. 그래서 액티비티 같은 UI 컨트롤러가 자료 처리를 맡지 않아도 됩니다(관심사 분리). [S23]

| 역할 | 내용 |
|---|---|
| UI 상태 관리 | LiveData, StateFlow, MutableState로 자료를 보관하고 변경을 감지 |
| 상태 호이스팅 | ViewModel이 상태를 갖고 UI에 제공. UI는 그 상태를 **구독** |
| 수명 주기 인식 | **화면 회전 같은 구성 변경에도 자료 유지**. 단, 시스템이 프로세스를 **강제 종료하면 초기화** |
| 이벤트 처리 | 사용자 입력, 네트워크 요청, DB 조회 같은 로직 담당 |

```text
       상태 ↓
ViewModel ──────▶ UI
          ◀──────
       ↑ 이벤트
```

[교육용 설명] 상태 보존 비교: `remember`는 회전하면 사라지고, `rememberSaveable`은 회전과 강제 종료를 견딥니다. `ViewModel`은 회전은 견디지만 강제 종료는 견디지 못합니다.

### Simple ViewModel 프로젝트

프로젝트 6.2.1 Simple ViewModel Demo (6.1.2를 ViewModel로 다시 만들기)

```kotlin
// build.gradle.kts (Module :app)
dependencies {
    // ViewModel
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.7")
}
```

```kotlin
// app/.../ui/UiState.kt  — UI 상태를 담는 자료 클래스
data class UiState(val text: String = "")

// app/.../ui/AppViewModel.kt
class AppViewModel : ViewModel() {
    private val _uiState = MutableStateFlow(UiState())   // 수정 가능 (내부용)
    val uiState = _uiState.asStateFlow()                 // 읽기 전용, 외부 노출

    var input by mutableStateOf("")
        private set                                      // 바깥에서는 읽기만

    fun updateInput(input: String) {
        this.input = input
    }

    fun updateText() {
        _uiState.update { currentState ->
            currentState.copy(text = input)
        }
    }
}

// app/.../ui/AppScreen.kt
@Composable
fun SimpleScreen(
    modifier: Modifier = Modifier,
    viewModel: AppViewModel = viewModel(),
) {
    val uiState by viewModel.uiState.collectAsState()    // 현재 상태 구독
    val focusManager = LocalFocusManager.current         // 키보드 숨기기용
    Column(modifier = modifier) {
        TextField(
            value = viewModel.input,
            onValueChange = { viewModel.updateInput(it) },
            singleLine = true,
            keyboardOptions = KeyboardOptions.Default.copy(imeAction = ImeAction.Done),
            keyboardActions = KeyboardActions(
                onDone = {
                    viewModel.updateText()
                    viewModel.updateInput("")
                    focusManager.clearFocus()
                }
            )
        )
        Text(text = uiState.text)
    }
}
```

| 코드 | 뜻 |
|---|---|
| `class AppViewModel : ViewModel()` | ViewModel에서 파생 |
| `MutableStateFlow(UiState())` | 상태를 저장하고 변화를 **관찰** (수정 가능) |
| `_uiState.asStateFlow()` | **읽기 전용 StateFlow**로 바꿔 외부에 공개 |
| `private set` | 프로퍼티를 **밖에서는 바꿀 수 없게** |
| `_uiState.update { it.copy(…) }` | 현재 상태를 복사해 일부만 바꾼 새 상태로 교체 |
| `viewModel: AppViewModel = viewModel()` | ViewModel 객체를 가져옴 (회전해도 같은 객체) |
| `collectAsState()` | StateFlow를 **State로 변환**. 안에서 remember로 기억하며 관찰 → 바뀌면 리컴포지션 |

- **상태를 두 종류로 나눕니다.**
  - 업데이트 주기가 **긴** 상태 → 자료 클래스 `UiState`에 둡니다(StateFlow).
  - TextField 입력처럼 **자주 바뀌는 일시적** 상태 → ViewModel에 직접 `mutableStateOf`로 둡니다.
- `_` 접두어 관례: 안에서는 `_uiState`로 고치고, 밖에는 `uiState`(읽기 전용)만 보여 줍니다. 그래서 **UI가 상태를 직접 바꿀 수 없고, 반드시 ViewModel 함수(이벤트)를 거칩니다.**
- State 대신 StateFlow를 쓰는 중요한 이유는 **비동기로 동작**하기 때문입니다. 네트워크로 자료를 주고받을 때 효율적입니다. StateFlow와 MutableStateFlow는 Kotlin이 제공합니다.

### 자료 관리 — 새 이름 따라 쓰기 게임

프로젝트 6.2.2 Data Management Demo: 화면에 나온 새 이름을 그대로 입력하면 다음 문제가 나옵니다.

```xml
<!-- strings.xml -->
<string name="count">%d/%d</string>
<!-- dimens.xml -->
<dimen name="padding_medium">16dp</dimen>
```

```kotlin
// app/.../data/BirdData.kt  — 자료를 코드와 분리
const val MAX_NO_OF_BIRDS = 5
val allBirds = setOf(
    "가마우지", "갈까마귀", "개똥지빠귀", "노랑지빠귀", "딱따구리", "말똥가리",
    "수리부엉이", "오목눈이", "찌르레기", "청둥오리", "해오라기", "황조롱이",
)

// app/.../ui/AppUiState.kt
data class AppUiState(
    val birdCount: Int = 0,
    val currentBird: String = "",
)

// app/.../ui/AppViewModel.kt
class AppViewModel : ViewModel() {
    private val _uiState = MutableStateFlow(AppUiState())
    val uiState = _uiState.asStateFlow()
    private var usedBirds: MutableSet<String> = mutableSetOf()
    var userInput by mutableStateOf("")
        private set

    init {
        pickRandomBird()
    }

    private fun updateUiState(newBird: String) {
        _uiState.update { currentState ->
            currentState.copy(
                birdCount = currentState.birdCount + 1,
                currentBird = newBird
            )
        }
    }

    fun updateUserInput(userInput: String) {
        this.userInput = userInput
    }

    fun checkUserInput() {
        if (userInput == uiState.value.currentBird)
            pickRandomBird()
        userInput = ""
    }

    private fun pickRandomBird() {
        val newBird = allBirds.random()
        if (usedBirds.contains(newBird))
            pickRandomBird()
        else
            updateUiState(newBird)
    }
}

// app/.../ui/AppScreen.kt
@Composable
fun AppScreen(modifier: Modifier = Modifier, viewModel: AppViewModel = viewModel()) {
    val uiState by viewModel.uiState.collectAsState()
    Column(
        modifier = modifier,
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(stringResource(R.string.count, uiState.birdCount, MAX_NO_OF_BIRDS))
        Text(uiState.currentBird)
        OutlinedTextField(
            value = viewModel.userInput,
            onValueChange = { viewModel.updateUserInput(it) },
            singleLine = true,
            keyboardOptions = KeyboardOptions.Default.copy(imeAction = ImeAction.Done),
            keyboardActions = KeyboardActions(onDone = { viewModel.checkUserInput() })
        )
    }
}

// MainActivity.kt (setContent 안)
ViewModelDemoTheme {
    Surface(modifier = Modifier.fillMaxSize()) {
        val mediumPadding = dimensionResource(R.dimen.padding_medium)
        AppScreen(
            modifier = Modifier
                .statusBarsPadding()
                .safeDrawingPadding()
                .padding(mediumPadding),
        )
    }
}
```

| 코드 | 뜻 |
|---|---|
| `init { pickRandomBird() }` | ViewModel이 만들어질 때 첫 문제를 고름 |
| `uiState.value.currentBird` | StateFlow의 **현재 값**은 `.value`로 읽음 |
| `allBirds.random()` | 집합에서 무작위로 하나 |
| `stringResource(R.string.count, a, b)` | `%d/%d` 자리에 a, b를 채운 문자열 (예: `1/5`) |
| `safeDrawingPadding()` | 시스템 UI(노치·내비게이션 바 등)를 피하는 여백 |

- 디렉토리 구조: `data`(자료) / `ui`(UiState·ViewModel·Screen) / `res`(리소스)로 **나누어 저장**합니다.

[교육용 설명] 교재 코드에서는 `usedBirds`에 새를 **추가(add)하는 줄이 없습니다.** 그래서 같은 새가 다시 나올 수 있고, 5문제에서 끝나지도 않습니다. `updateUiState(newBird)` 앞에 `usedBirds.add(newBird)`를 넣고, `birdCount`가 `MAX_NO_OF_BIRDS`에 닿으면 게임을 끝내는 코드를 더하면 완성됩니다(연습문제 6.2.2와 함께 풀어 보세요).

### 교재 연습문제 풀이

**6.1.2** Checkbox를 추가하고, 회전해도 체크 상태가 유지되게 하시오.

<details><summary>정답 보기</summary>

```kotlin
var checked by rememberSaveable { mutableStateOf(false) }
Checkbox(checked = checked, onCheckedChange = { checked = it })
```

</details>

**6.1.3** Bar를 스테이트리스로, Qux를 스테이트풀로 만들어 입력되게 하시오.

<details><summary>정답 보기</summary>

```kotlin
@Composable
fun Bar(v: String, onVChange: (String) -> Unit) {
    TextField(value = v, onValueChange = onVChange)
}

@Composable
fun Qux() {
    var v by remember { mutableStateOf("") }
    Bar(v, onVChange = { v = it })
}
```

</details>

**6.1.4** 종료 버튼을 누르면 종료할지 묻는 대화 상자를 띄우시오.

<details><summary>정답 보기</summary>

```kotlin
@Composable
fun ExitApp() {
    var ask by remember { mutableStateOf(false) }
    val activity = LocalContext.current as Activity
    if (ask) {
        AlertDialog(
            title = { Text("종료할까요?") },
            onDismissRequest = { ask = false },
            confirmButton = { TextButton(onClick = { activity.finish() }) { Text("종료") } },
            dismissButton = { TextButton(onClick = { ask = false }) { Text("취소") } }
        )
    }
    Button(onClick = { ask = true }) { Text("종료") }
}
```

</details>

**6.2.1** Checkbox 상태를 UiState에 저장하고 ViewModel에서 관리하시오.

<details><summary>정답 보기</summary>

```kotlin
data class UiState(val text: String = "", val checked: Boolean = false)

// AppViewModel
fun updateChecked(checked: Boolean) {
    _uiState.update { it.copy(checked = checked) }
}

// AppScreen
Checkbox(checked = uiState.checked, onCheckedChange = { viewModel.updateChecked(it) })
```

</details>

### 시험 대비: 빈칸 채우기

```kotlin
var text by 【①】 { mutableStateOf("") }        // 회전해도 유지
val focusManager = LocalFocusManager.【②】
TextField(
    value = input,
    onValueChange = { input = it },
    keyboardOptions = KeyboardOptions.Default.copy(imeAction = ImeAction.Done),
    keyboardActions = 【③】(
        【④】 = {                                 // Done을 눌렀을 때
            text = input
            focusManager.【⑤】()                   // 키보드 숨기기
        }
    )
)
```

<details><summary>정답 보기</summary>

① `rememberSaveable` ② `current` ③ `KeyboardActions` ④ `onDone` ⑤ `clearFocus`

</details>

```kotlin
class AppViewModel : 【①】() {
    private val _uiState = 【②】(UiState())
    val uiState = _uiState.【③】()                 // 읽기 전용으로 공개
    var input by mutableStateOf("")
        【④】 set
    fun updateText() {
        _uiState.【⑤】 { currentState -> currentState.copy(text = input) }
    }
}

@Composable
fun SimpleScreen(viewModel: AppViewModel = 【⑥】()) {
    val uiState by viewModel.uiState.【⑦】()
    Text(text = uiState.text)
}
```

<details><summary>정답 보기</summary>

① `ViewModel` ② `MutableStateFlow` ③ `asStateFlow` ④ `private` ⑤ `update` ⑥ `viewModel` ⑦ `collectAsState`

</details>

### 핵심 정리

- `remember`: 리컴포지션 때는 다시 실행되지 않고 값을 유지합니다. 컴포저블이 사라지면 함께 사라집니다.
- `MutableState.value`를 관찰합니다. `by`는 위임이라 `.value` 없이 씁니다.
- `rememberSaveable`: Bundle에 저장되어 **회전·강제 종료**를 견딥니다(복합 형식은 Parcelable/Saver).
- 상태 호이스팅: **값은 내려 주고 이벤트는 올려받기** → 하위는 스테이트리스, 상위는 스테이트풀
- ViewModel: `MutableStateFlow`(내부) → `asStateFlow()`(공개) → `collectAsState()`(UI에서 구독). 회전은 견디고 강제 종료는 못 견딥니다.

---

# U07. 화면 전환

### 오늘의 목표

- `when`으로 단순하게 화면을 바꿀 수 있다.
- NavController·NavGraph·NavHost의 역할을 구분할 수 있다.
- `navigate()`·`popBackStack()`·`popBackStack(route, inclusive)`와 백 스택의 동작을 설명할 수 있다.
- `TopAppBar`에 뒤로 가기 아이콘을 넣고, enum 클래스로 화면 이름을 관리할 수 있다.
- Kotlin nullable 형식과 `?.`, `?:`를 읽을 수 있다.
- 여러 화면이 ViewModel 하나를 함께 쓰도록 만들 수 있다.
- `Intent.ACTION_SEND`로 다른 앱에 문자열을 공유할 수 있다.

### 화면 설계 원칙과 단순한 화면 전환

- 한 화면에 너무 많은 내용이나 입력을 담지 않습니다. 정보를 나누어 **여러 화면에 단계적으로** 제공합니다.
- 화면 사이 전환은 자연스럽게 이어져야 하고, 이전 화면의 입력이 다음 화면에 올바르게 반영되어야 합니다.

가장 단순한 방법은 **조건에 따라 다른 컴포저블을 배치**하는 것입니다.

```kotlin
var index by remember { mutableStateOf(1) }
when (index) {
    1 -> Screen1( … )
    2 -> Screen2( … )
    else -> Screen3( … )
}
```

간단한 앱에는 편하고 이해하기 쉽습니다. 하지만 자료와 화면이 많아지면 체계적인 관리가 필요합니다.

### 네비게이션 구성 요소

| 구성 요소 | 역할 |
|---|---|
| **NavController** | 대상(화면) 사이 **이동**을 담당. 프로그램에서는 파생 클래스 `NavHostController`를 씀 |
| **NavGraph** | 이동할 수 있는 대상과 그 연결 관계를 정의한 **그래프** |
| **NavHost** | NavGraph에 대상을 담는 **컨테이너 컴포저블** |

("대상(destination)"은 **화면**으로 이해하면 됩니다.)

```kotlin
@Composable
fun NavHost(
    navController: NavHostController,
    startDestination: String,        // 첫 화면
    modifier: Modifier = Modifier,
    // ⋮ 전환 애니메이션 매개 변수들
    builder: NavGraphBuilder.() -> Unit   // 여기서 composable(route) { }로 화면 등록
)
```

**백 스택(back stack)**: NavController는 이동한 화면을 **스택에 차례로 쌓습니다.** 기기의 [뒤로] 버튼을 누르면 직전 화면으로 돌아갑니다. [S24]

| 함수 | 동작 |
|---|---|
| `navigate(route)` | route 화면을 만들어 **백 스택에 넣고** 그 화면으로 이동 |
| `popBackStack()` | **직전 화면**으로 이동, 현재 화면을 스택에서 제거 |
| `popBackStack(route, inclusive)` | 가장 최근에 방문한 route 화면까지 스택을 **차례로 제거하며** 이동. `inclusive = true`면 **그 화면까지 제거** |

### 세 화면 이동 — Navigation Demo

프로젝트 7.1.1 Navigation Demo

```kotlin
// build.gradle.kts (Module :app)
dependencies {
    implementation("androidx.navigation:navigation-compose:2.8.7")
}
```

```kotlin
// app/.../ui/Screen1.kt
@Composable
fun Screen1(onClickButtonNext: () -> Unit) {
    Column {
        Text("Screen 1")
        Button(onClick = onClickButtonNext) { Text("다음") }
    }
}

// app/.../ui/Screen2.kt
@Composable
fun Screen2(onClickButtonBack: () -> Unit, onClickButtonNext: () -> Unit) {
    Column {
        Text("Screen 2")
        Row {
            Button(onClick = onClickButtonBack) { Text("뒤로") }
            Button(onClick = onClickButtonNext) { Text("다음") }
        }
    }
}

// app/.../ui/Screen3.kt
@Composable
fun Screen3(
    onClickButtonBack: () -> Unit,
    onClickButtonRestart: () -> Unit,
    onClickButtonFinish: () -> Unit
) {
    Column {
        Text("Screen 3")
        Row {
            Button(onClick = onClickButtonBack) { Text("뒤로") }
            Button(onClick = onClickButtonRestart) { Text("처음으로") }
            OutlinedButton(onClick = onClickButtonFinish) { Text("끝내기") }
        }
    }
}

// app/.../MainActivity.kt
@Composable
fun NavigationApp(modifier: Modifier = Modifier) {
    val activity = (LocalContext.current) as Activity
    val navController: NavHostController = rememberNavController()
    NavHost(
        navController = navController,
        startDestination = "screen1",
        modifier = modifier
    ) {
        composable(route = "screen1") {
            Screen1(onClickButtonNext = { navController.navigate("screen2") })
        }
        composable(route = "screen2") {
            Screen2(
                onClickButtonBack = { navController.popBackStack() },
                onClickButtonNext = { navController.navigate("screen3") }
            )
        }
        composable(route = "screen3") {
            Screen3(
                onClickButtonBack = { navController.popBackStack() },
                onClickButtonRestart = { navController.popBackStack("screen1", false) },
                onClickButtonFinish = { activity.finish() }
            )
        }
    }
}
```

- 화면 컴포저블(Screen1~3)은 **이동 방법을 모릅니다.** 버튼 이벤트만 위로 올립니다(**상태 호이스팅**). 실제 이동은 NavHost를 가진 `NavigationApp`이 정합니다.
- `rememberNavController()`로 NavController를 만듭니다.
- `LocalContext.current as Activity` → `activity.finish()`로 **액티비티(앱)를 종료**합니다.
- 복잡한 구조는 `NavGraphBuilder.navigation()`으로 중첩 그래프를 만듭니다(교재에서는 다루지 않음).

**백 스택 변화 따라가기**

| 동작 | 백 스택 (오른쪽이 맨 위) |
|---|---|
| 시작 | screen1 |
| [다음] | screen1, screen2 |
| [다음] | screen1, screen2, screen3 |
| [처음으로] `popBackStack("screen1", false)` | **screen1** |
| (만약 `true`였다면) | **비어 있음** → 화면이 사라짐 (연습문제 7.1.3) |

### 상단 앱 바와 뒤로 가기

| NavHostController 멤버 | 뜻 |
|---|---|
| `previousBackStackEntry` | 백 스택의 **직전** 대상 (없으면 null) |
| `currentBackStackEntryAsState()` | 백 스택의 **현재** 대상을 State로 |

프로젝트 7.1.2 TopAppBar Navigation Demo

```xml
<string name="title1">Title 1</string>
<string name="title2">Title 2</string>
<string name="title3">Title 3</string>
```

```kotlin
// app/.../NavigationApp.kt
enum class AppScreen(@StringRes val titleId: Int) {
    Screen1(R.string.title1),
    Screen2(R.string.title2),
    Screen3(R.string.title3),
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun NavigationAppBar(
    currentScreen: AppScreen,
    canNavigateBack: Boolean,
    navigateBack: () -> Unit
) {
    TopAppBar(
        title = { Text(stringResource(currentScreen.titleId)) },
        modifier = Modifier.statusBarsPadding(),
        colors = TopAppBarDefaults.mediumTopAppBarColors(
            containerColor = MaterialTheme.colorScheme.primaryContainer
        ),
        navigationIcon = {
            if (canNavigateBack) {
                IconButton(onClick = navigateBack) {
                    Icon(
                        imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                        contentDescription = "뒤로"
                    )
                }
            }
        }
    )
}

@Composable
fun NavigationApp() {
    val activity = (LocalContext.current) as Activity
    val navController: NavHostController = rememberNavController()
    // 백 스택의 대상 가져오기
    val backStackEntry by navController.currentBackStackEntryAsState()
    // 대상 AppScreen 가져오기
    val currentScreen = AppScreen.valueOf(
        backStackEntry?.destination?.route ?: AppScreen.Screen1.name
    )
    Scaffold(
        topBar = {
            NavigationAppBar(
                currentScreen = currentScreen,
                canNavigateBack = navController.previousBackStackEntry != null,
                navigateBack = { navController.popBackStack() }
            )
        }
    ) { innerPadding ->
        NavHost(
            navController = navController,
            startDestination = AppScreen.Screen1.name,
            modifier = Modifier.padding(innerPadding)
        ) {
            composable(route = AppScreen.Screen1.name) {
                Screen1(onClickButtonNext = { navController.navigate(AppScreen.Screen2.name) })
            }
            composable(route = AppScreen.Screen2.name) {
                Screen2(onClickButtonNext = { navController.navigate(AppScreen.Screen3.name) })
            }
            composable(route = AppScreen.Screen3.name) {
                Screen3(onClickButtonFinish = { activity.finish() })
            }
        }
    }
}
```

(이 프로젝트의 Screen2는 [다음], Screen3은 [끝내기] 버튼만 있습니다. 뒤로 가기는 앱 바가 맡습니다.)

| 코드 | 뜻 |
|---|---|
| `enum class AppScreen` | 화면 이름을 **열거 클래스**로 관리. 오타로 route가 틀리는 일을 막음 |
| `AppScreen.Screen1.name` | 이름을 문자열로 → `"Screen1"` |
| `AppScreen.valueOf("Screen1")` | 문자열로 enum 객체를 얻음 → `AppScreen.Screen1` |
| `TopAppBar(title, navigationIcon, colors)` | Material3 상단 앱 바 (`@OptIn(ExperimentalMaterial3Api::class)` 필요) |
| `canNavigateBack = previousBackStackEntry != null` | 돌아갈 화면이 있을 때만 화살표 표시 |
| `Icons.AutoMirrored.Filled.ArrowBack` | 뒤로 화살표 (RTL 언어에서는 방향 반전) |

- **Activity**는 앱의 실행 단위입니다. 앱은 Activity 하나 이상으로 이루어지고, `finish()`는 Activity를 종료합니다.

### Kotlin nullable과 ?. ?:

`Foo?`는 **Foo 객체 또는 null**을 나타냅니다. 이런 형식을 **nullable 형식**이라 합니다.

```kotlin
class Foo(val x: Int)

fun f(foo: Foo?) {
    println("${foo?.x}, ${foo?.x ?: 100}")
}

fun main() {
    val foo1: Foo = Foo(10)
    f(foo1)   // 10, 10
    f(null)   // null, 100
}
```

| 연산자 | 이름 | 뜻 |
|---|---|---|
| `a?.b` | 안전 호출 | a가 null이 아니면 `a.b`, null이면 **null** |
| `a ?: b` | 엘비스 연산자 | a가 null이 아니면 **a**, null이면 **b** |

그래서 `backStackEntry?.destination?.route ?: AppScreen.Screen1.name`은 백 스택 정보가 있으면 현재 route이고, 없으면 `"Screen1"`입니다.

### 여러 화면 + ViewModel — 꽃 주문

프로젝트 7.1.3 Multi Screen ViewModel Demo: 꽃과 수량을 고르는 화면 → 주문 내역 화면. 두 화면이 **ViewModel 하나**를 함께 씁니다. [S25]

```kotlin
// build.gradle.kts
dependencies {
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.7")   // ViewModel
    implementation("androidx.navigation:navigation-compose:2.8.7")           // Navigation
}
```

```kotlin
// app/.../data/Data.kt
val flowers = listOf("장미", "백합")
val quantities = listOf(
    Pair("한 송이", 1),
    Pair("열 송이", 10),
)

// app/.../data/AppUiState.kt
data class AppUiState(
    val flower: String = "",
    val quantity: Int = 0
)

// app/.../ui/AppViewModel.kt
class AppViewModel : ViewModel() {
    private val _uiState = MutableStateFlow(AppUiState())
    val uiState: StateFlow<AppUiState> = _uiState.asStateFlow()

    fun setFlower(flower: String) {
        _uiState.update { currentState -> currentState.copy(flower = flower) }
    }
    fun setQuantity(quantity: Int) {
        _uiState.update { currentState -> currentState.copy(quantity = quantity) }
    }
    fun resetUiState() {
        _uiState.value = AppUiState()
    }
}
```

```kotlin
// app/.../ui/FlowerScreen.kt
@Composable
fun FlowerScreen(
    onFlowerSelectionChanged: (String) -> Unit,
    onQuantitySelectionChanged: (Int) -> Unit,
    onNextButtonClicked: () -> Unit,
) {
    var selectedFlower by rememberSaveable { mutableStateOf("") }
    var selectedQuantity by rememberSaveable { mutableStateOf(0) }
    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Column {
            flowers.forEach { item ->
                Row(
                    modifier = Modifier.selectable(
                        selected = selectedFlower == item,
                        onClick = {
                            selectedFlower = item
                            onFlowerSelectionChanged(item)
                        }
                    ),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    RadioButton(
                        selected = selectedFlower == item,
                        onClick = {
                            selectedFlower = item
                            onFlowerSelectionChanged(item)
                        }
                    )
                    Text(item)
                }
            }
            HorizontalDivider(thickness = 2.dp)
            quantities.forEach { item ->
                Row(
                    modifier = Modifier.selectable(
                        selected = selectedQuantity == item.second,
                        onClick = {
                            selectedQuantity = item.second
                            onQuantitySelectionChanged(item.second)
                        }
                    ),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    RadioButton(
                        selected = selectedQuantity == item.second,
                        onClick = {
                            selectedQuantity = item.second
                            onQuantitySelectionChanged(item.second)
                        }
                    )
                    Text(item.first)
                }
            }
            HorizontalDivider(thickness = 2.dp)
        }
        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.End) {
            Button(
                enabled = selectedFlower.isNotEmpty() && selectedQuantity > 0,  // 둘 다 골랐을 때만
                onClick = onNextButtonClicked
            ) { Text("다음") }
        }
    }
}

// app/.../ui/SummaryScreen.kt
@Composable
fun SummaryScreen(uiState: AppUiState, onClickButtonStart: () -> Unit) {
    val context = LocalContext.current
    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Column {
            Text("주문 내역", style = MaterialTheme.typography.headlineSmall)
            Text(
                "${uiState.flower} ${uiState.quantity} 송이",
                modifier = Modifier.padding(start = 16.dp),
                fontSize = 20.sp
            )
        }
        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            OutlinedButton(
                onClick = onClickButtonStart,
                modifier = Modifier.weight(1f).padding(horizontal = 16.dp)
            ) { Text("처음으로") }
            Button(
                onClick = { (context as Activity).finish() },
                modifier = Modifier.weight(1f).padding(horizontal = 16.dp)
            ) { Text("끝내기") }
        }
    }
}
```

```kotlin
// app/.../ui/theme/Theme.kt — 상태 바 색 지정 (MaterialTheme 앞)
val view = LocalView.current
if (!view.isInEditMode) {
    SideEffect {
        val window = (view.context as Activity).window
        window.statusBarColor = colorScheme.primary.toArgb()
        WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = darkTheme
    }
}

// app/.../MultiScreenViewModelApp.kt
enum class AppScreen { Flower, Summary }

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TopBar() {
    TopAppBar(
        title = { Text(stringResource(id = R.string.app_name)) },
        colors = TopAppBarDefaults.topAppBarColors(
            containerColor = MaterialTheme.colorScheme.primaryContainer
        )
    )
}

@Composable
fun MultiScreenViewModelApp(
    viewModel: AppViewModel = viewModel(),
    navController: NavHostController = rememberNavController()
) {
    Scaffold(topBar = { TopBar() }) { innerPadding ->
        val uiState by viewModel.uiState.collectAsState()
        NavHost(
            navController = navController,
            startDestination = AppScreen.Flower.name,
            modifier = Modifier.padding(innerPadding)
        ) {
            composable(route = AppScreen.Flower.name) {
                FlowerScreen(
                    onFlowerSelectionChanged = { viewModel.setFlower(it) },
                    onQuantitySelectionChanged = { viewModel.setQuantity(it) },
                    onNextButtonClicked = { navController.navigate(AppScreen.Summary.name) },
                )
            }
            composable(route = AppScreen.Summary.name) {
                SummaryScreen(
                    uiState = uiState,
                    onClickButtonStart = {
                        viewModel.resetUiState()
                        navController.popBackStack(AppScreen.Flower.name, false)
                    }
                )
            }
        }
    }
}
```

| 코드 | 뜻 |
|---|---|
| `Pair("한 송이", 1)` | 두 값 묶음. `item.first` = "한 송이", `item.second` = 1 |
| `Modifier.selectable(selected, onClick)` | 줄(Row) 전체를 눌러도 선택되게 함 |
| `Button(enabled = …)` | 조건이 거짓이면 **비활성(누를 수 없음)** |
| `_uiState.value = AppUiState()` | 상태를 **초기값으로 되돌림** |
| `MaterialTheme.typography.headlineSmall` | 테마에 정의된 글꼴 스타일 |
| `SideEffect { }` | 리컴포지션이 성공할 때마다 Compose 밖(창 설정 등)에 반영하는 효과 |

- 데이터 흐름은 이렇습니다.
  1. FlowerScreen이 이벤트를 올립니다.
  2. ViewModel이 상태를 갱신합니다.
  3. NavHost가 `uiState`를 SummaryScreen에 내려 줍니다.
- 화면끼리 **직접 자료를 주고받지 않고, ViewModel을 거칩니다.**

### 다른 앱으로 공유 — ACTION_SEND

메모 내용을 메시지로 보내거나 기사를 SNS에 공유할 때 **인텐트(intent)**를 씁니다.

프로젝트 7.2.1 Share Demo

```kotlin
@Composable
fun ShareDemoApp(modifier: Modifier = Modifier) {
    var text by remember { mutableStateOf("") }
    Column(modifier) {
        val context = LocalContext.current
        TextField(value = text, onValueChange = { text = it })
        Button(onClick = { send(context, text) }) { Text("공유") }
    }
}

fun send(context: Context, text: String) {
    val intent = Intent(Intent.ACTION_SEND).apply {
        type = "text/plain"
        putExtra(Intent.EXTRA_TEXT, text)
    }
    context.startActivity(
        Intent.createChooser(intent, "")
    )
}
```

| 코드 | 뜻 |
|---|---|
| `Intent(Intent.ACTION_SEND)` | "보내기" 동작을 하는 인텐트 |
| `type = "text/plain"` | 보내는 자료의 형식(MIME) |
| `putExtra(Intent.EXTRA_TEXT, text)` | 보낼 문자열을 인텐트에 담음 |
| `Intent.createChooser(intent, "")` | 공유할 수 있는 **앱 목록**을 보여 주고 사용자가 고르게 함 |
| `context.startActivity(…)` | 인텐트로 새 액티비티 시작 |

- **Intent**는 실행할 액티비티의 정보와 필요한 데이터를 담는 클래스입니다. U10에서 자세히 다룹니다.
- `send()`는 일반 함수라서 `LocalContext.current`를 쓸 수 없습니다. 그래서 컴포저블에서 얻은 `context`를 **인수로** 넘깁니다.

### 교재 연습문제 풀이

**7.1.1** `when`으로 화면을 바꾸는 앱을 만드시오.

<details><summary>정답 보기</summary>

```kotlin
@Composable
fun WhenApp() {
    var index by remember { mutableStateOf(1) }
    Column(Modifier.statusBarsPadding()) {
        when (index) {
            1 -> Text("화면 1")
            2 -> Text("화면 2")
            else -> Text("화면 3")
        }
        Button(onClick = { index = index % 3 + 1 }) { Text("다음 화면") }
    }
}
```

</details>

**7.1.2** Screen1에 Screen3으로 바로 가는 버튼을 추가하시오.

<details><summary>정답 보기</summary>

Screen1에 매개 변수 `onClickButtonJump: () -> Unit`와 버튼을 추가합니다. NavHost에서 `onClickButtonJump = { navController.navigate("screen3") }`로 연결합니다.

</details>

**7.1.3** `popBackStack("screen1", true)`로 바꾸면?

<details><summary>정답 보기</summary>

screen1**까지** 백 스택에서 제거되어 스택이 비고, **빈 화면**이 됩니다. `inclusive = true`는 찾은 대상 자신도 지우기 때문입니다.

</details>

**7.2.1** TextField에 공백이 아닌 문자가 있을 때만 [공유]가 활성화되게 하시오.

<details><summary>정답 보기</summary>

```kotlin
Button(
    enabled = text.isNotBlank(),
    onClick = { send(context, text) }
) { Text("공유") }
```

</details>

### 시험 대비: 빈칸 채우기

```kotlin
val navController: NavHostController = 【①】()
【②】(
    navController = navController,
    【③】 = "screen1"                       // 첫 화면
) {
    【④】(route = "screen1") {
        Screen1(onClickButtonNext = { navController.【⑤】("screen2") })
    }
    composable(route = "screen2") {
        Screen2(onClickButtonBack = { navController.【⑥】() })
    }
}
```

<details><summary>정답 보기</summary>

① `rememberNavController` ② `NavHost` ③ `startDestination` ④ `composable` ⑤ `navigate` ⑥ `popBackStack`

</details>

```kotlin
val backStackEntry by navController.【①】()
val currentScreen = AppScreen.【②】(
    backStackEntry?.destination?.route 【③】 AppScreen.Screen1.name
)
canNavigateBack = navController.【④】 != null

val intent = Intent(Intent.【⑤】).apply {
    type = "text/plain"
    【⑥】(Intent.EXTRA_TEXT, text)
}
context.startActivity(Intent.【⑦】(intent, ""))
```

<details><summary>정답 보기</summary>

① `currentBackStackEntryAsState` ② `valueOf` ③ `?:` ④ `previousBackStackEntry` ⑤ `ACTION_SEND` ⑥ `putExtra` ⑦ `createChooser`

</details>

### 핵심 정리

- 단순 전환은 `when(index)`, 체계적인 전환은 **Navigation**(`navigation-compose` 의존성)을 씁니다.
- `rememberNavController()` + `NavHost(startDestination) { composable(route) { } }`
- `navigate(route)`는 스택에 넣기, `popBackStack()`은 직전 화면, `popBackStack(route, inclusive)`는 거기까지 되돌리기(true면 그 화면도 제거)입니다.
- 앱 바 뒤로 가기는 `previousBackStackEntry != null`일 때만 보입니다. 화면 이름은 **enum**(`name`/`valueOf`)으로 관리합니다.
- `?.` 안전 호출, `?:` 엘비스 연산자
- 공유: `Intent(ACTION_SEND)` + `type` + `putExtra(EXTRA_TEXT)` + `createChooser` + `startActivity`

---

# U08. 자료 저장과 관리

### 오늘의 목표

- 내부 저장소·외부 저장소(앱 전용)·공유 저장소의 차이를 설명할 수 있다.
- `openFileOutput`/`openFileInput`과 `use`로 텍스트 파일을 쓰고 읽을 수 있다.
- `Bitmap.compress`와 `BitmapFactory`로 그림을 파일에 저장하고 불러올 수 있다.
- MediaStore로 공유 저장소에 그림을 저장하고, Photo Picker로 그림을 고를 수 있다.
- Room의 Entity·DAO·Database를 만들고 쿼리로 자료를 넣고 꺼낼 수 있다.
- Room을 ViewModel(Factory, `stateIn`)과 Application 클래스로 구조화할 수 있다.
- WorkManager로 백그라운드 작업을 등록·취소·연쇄 실행할 수 있다.

### 저장소의 종류

안드로이드의 파일 시스템은 다른 플랫폼의 디스크 파일 시스템과 비슷합니다. [S26]

| 저장소 | 특징 | 접근 |
|---|---|---|
| **내부 저장소** (앱 전용) | 다른 앱이 접근하면 안 되는 **민감한 정보** | `context.filesDir` / `getFilesDir()` |
| **외부 저장소** (앱 전용) | 앱 전용이지만 다른 앱이 접근할 **수도** 있음 | `context.getExternalFilesDir(null)` |
| **공유 저장소** | 미디어·문서 등 **다른 앱과 공유**할 파일 | MediaStore API, 저장소 접근 체제 |

### 텍스트 파일 쓰기·읽기

내부 저장소에 `data.txt`를 만드는 방법은 두 가지입니다.

```kotlin
// ① File 객체로
val file = File(context.filesDir, "data.txt")
val outputStream = file.outputStream()

// ② 더 간편하게 — 바로 FileOutputStream 생성
val outputStream = context.openFileOutput("data.txt", Context.MODE_PRIVATE)
```

FileOutputStream은 **바이트 배열**을 씁니다. 문자열을 쓰려면 `Writer`나 `BufferedWriter`로 바꿉니다.

프로젝트 8.1.1 App Specific Storage Demo

```kotlin
@Composable
fun AppSpecificStorageDemoApp(modifier: Modifier = Modifier) {
    val context = LocalContext.current
    val filename = "data.txt"
    var inputText by remember { mutableStateOf("") }
    var readText by remember { mutableStateOf("") }
    Column(modifier) {
        InputPart(inputText, { inputText = it }) {
            context.openFileOutput(filename, Context.MODE_PRIVATE)
                .writer()
                .use {
                    it.write(inputText)
                }
        }
        ReadPart(readText) {
            context.openFileInput(filename)
                .reader()
                .use {
                    readText = it.readLines()[0]
                }
        }
    }
}

@Composable
fun InputPart(inputText: String, onValueChange: (String) -> Unit, onSave: () -> Unit) {
    Row {
        OutlinedTextField(value = inputText, onValueChange = onValueChange)
        Button(onClick = onSave) { Text("저장") }
    }
}

@Composable
fun ReadPart(readText: String, onRead: () -> Unit) {
    Row {
        Text(readText, Modifier.widthIn(min = 100.dp))
        Button(onClick = onRead) { Text("읽기") }
    }
}
```

| 코드 | 뜻 |
|---|---|
| `openFileOutput(이름, MODE_PRIVATE)` | 쓰기 스트림. **MODE_PRIVATE**는 새로 씀(덮어쓰기), **MODE_APPEND**는 기존 파일 뒤에 **추가** |
| `openFileInput(이름)` | 읽기 스트림 (FileInputStream) |
| `.writer()` / `.reader()` | 문자 단위 Writer / Reader로 변환 |
| `.use { }` | 블록이 끝나면 스트림을 **자동으로 닫음** (예외가 나도) |
| `readLines()[0]` | 모든 줄을 목록으로 읽고 **첫 줄**만 사용 |

- 파일 전체를 읽으려면 `readText = it.readText()`를 씁니다(연습문제 8.1.3).
- 저장된 파일은 **View > Tool Windows > Device Explorer**에서 찾을 수 있습니다.
- `InputPart(inputText, { inputText = it }) { … }`: 마지막 매개 변수 `onSave`는 **후행 람다**로 넘겼습니다.

### 그림 파일 저장·불러오기 — Bitmap

| 함수 | 하는 일 |
|---|---|
| `bitmap.compress(format, quality, stream)` | Bitmap을 스트림으로 내보냄. quality 0~100(클수록 고품질, **PNG는 무손실이라 값과 무관**) |
| `BitmapFactory.decodeResource(res, id)` | 리소스 → Bitmap |
| `BitmapFactory.decodeStream(stream)` | InputStream → Bitmap |
| `bitmap.asImageBitmap()` | Bitmap → **ImageBitmap** (Compose `Image`에 표시하려면 필요) |
| `imageBitmap.asAndroidBitmap()` | ImageBitmap → Bitmap |

프로젝트 8.1.2 Bitmap Demo: 리소스 그림을 외부 저장소에 저장(Save) → 불러오기(Load) → 지우기(Delete)

```kotlin
@Composable
fun BitmapDemoApp(modifier: Modifier = Modifier) {
    val context = LocalContext.current
    val id = R.drawable.tree1
    val file = File(context.getExternalFilesDir(null), "image.png")
    var imageBitmap: ImageBitmap? by remember { mutableStateOf(null) }
    var fileExist by remember { mutableStateOf(file.exists()) }
    Column(modifier) {
        Row {
            Button(onClick = {
                val bitmap = context.bitmapFromResource(id)
                bitmap.save(file, Bitmap.CompressFormat.PNG, 100)
                fileExist = true
            }) { Text("Save") }
            Button(
                onClick = { imageBitmap = file.loadImageBitmap() },
                enabled = fileExist
            ) { Text("Load") }
            Button(onClick = {
                file.delete()
                fileExist = false
            }) { Text("Delete") }
        }
        if (imageBitmap != null) {
            Image(bitmap = imageBitmap!!, contentDescription = null)
        }
    }
}

// 변환 도우미 — 모두 확장 함수
fun ImageBitmap.toBitmap(): Bitmap = asAndroidBitmap()                      // ImageBitmap -> Bitmap
fun Context.bitmapFromResource(@DrawableRes id: Int): Bitmap =             // resource -> Bitmap
    BitmapFactory.decodeResource(resources, id)
fun File.loadBitmap(): Bitmap = BitmapFactory.decodeStream(inputStream())  // file -> Bitmap
fun Bitmap.save(file: File, format: Bitmap.CompressFormat, quality: Int) = // Bitmap -> file
    compress(format, quality, file.outputStream())
fun Bitmap.toImageBitmap(): ImageBitmap = asImageBitmap()                   // Bitmap -> ImageBitmap
@Composable
fun imageBitmapFromResource(@DrawableRes id: Int): ImageBitmap =            // resource -> ImageBitmap
    ImageBitmap.imageResource(id)
fun File.loadImageBitmap(): ImageBitmap = loadBitmap().asImageBitmap()     // file -> ImageBitmap
fun ImageBitmap.save(file: File, format: Bitmap.CompressFormat, quality: Int) =
    toBitmap().compress(format, quality, file.outputStream())              // ImageBitmap -> file
```

- `ImageBitmap?`는 nullable 형식입니다. `imageBitmap!!`는 **"null이 아님을 보장한다"**는 단언입니다. null이면 앱이 죽으므로, 앞에서 `!= null`을 확인했습니다.
- `fileExist` 상태로 [Load] 버튼의 `enabled`를 정합니다.

### 공유 저장소 — MediaStore

공유 저장소에 두는 자료는 세 가지입니다. [S27]

| 종류 | 위치 / API |
|---|---|
| **미디어 콘텐츠** (사진·음악·동영상) | 표준 공개 디렉토리, **MediaStore API** |
| 문서·기타 파일 (PDF, EPUB …) | 특수 디렉토리, 저장소 접근 체제 |
| 자료 집합 (Android 11, API 30+) | 기계 학습·미디어 재생용 큰 자료, BlobStoreManager API |

프로젝트 8.1.3 MediaStore Demo — 그림을 사진 폴더(Pictures)에 저장하고 다른 앱으로 보기

```kotlin
// app/.../MediaStoreUtils.kt
suspend fun Context.saveImage(filename: String, bitmap: Bitmap): Uri? {
    return withContext(Dispatchers.IO) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q)
            saveImageQ(filename, bitmap)
        else
            saveImageLegacy(filename, bitmap)
    }
}

private fun Context.saveImageQ(filename: String, bitmap: Bitmap): Uri? {
    val contentValues = ContentValues().apply {
        put(MediaStore.MediaColumns.DISPLAY_NAME, filename)
        put(MediaStore.MediaColumns.MIME_TYPE, "image/png")
        put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_PICTURES)
        put(MediaStore.Images.Media.IS_PENDING, 1)       // 저장하는 동안 다른 앱 접근 제한
    }
    val imageUri = contentResolver.insert(
        MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
        contentValues
    )
    if (imageUri == null) {
        Log.e("saveImageQ", "MediaStore 목록 생성 실패")
        return null
    }
    return try {
        contentResolver.openOutputStream(imageUri)?.use {
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, it)   // PNG 파일로 저장
        } ?: run {
            Log.e("saveImageQ", "출력 스트림 생성 실패")
            contentResolver.delete(imageUri, null, null)       // 생성한 URI 삭제
            null
        }
        contentValues.clear()
        contentValues.put(MediaStore.Images.Media.IS_PENDING, 0)   // 저장 완료 → 접근 허용
        contentResolver.update(imageUri, contentValues, null, null)
        imageUri
    } catch (e: Exception) {
        Log.e("saveImageQ", "이미지 저장 중 오류 발생", e)
        contentResolver.delete(imageUri, null, null)
        null
    }
}

private fun saveImageLegacy(filename: String, bitmap: Bitmap): Uri? {
    val imagesDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES)
    if (!imagesDir.exists()) imagesDir.mkdirs()          // 디렉토리가 없으면 생성
    val image = File(imagesDir, filename)
    return try {
        FileOutputStream(image).use { fos ->
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, fos)
        }
        Uri.fromFile(image)
    } catch (e: IOException) {
        Log.e("saveImageLegacy", "이미지 저장 실패", e)
        null
    }
}
```

```kotlin
// MainActivity.kt
@Composable
fun MediaStoreDemoApp(modifier: Modifier = Modifier) {
    val context = LocalContext.current
    var imageUri: Uri? by remember { mutableStateOf(null) }
    val coroutineScope = rememberCoroutineScope()
    Row(modifier) {
        Button(onClick = {
            coroutineScope.launch {
                val bitmap = context.bitmapFromResource(R.drawable.tree2)
                imageUri = context.saveImage("tree2", bitmap)
            }
        }) { Text("Save Image") }
        imageUri?.let {
            FilledTonalButton(onClick = {
                val intent = Intent(Intent.ACTION_VIEW, imageUri)
                context.startActivity(intent)
            }) { Text("Display Image") }
        }
    }
}
```

| 핵심 | 설명 |
|---|---|
| `withContext(Dispatchers.IO) { }` | 파일 저장은 오래 걸리므로 **입출력 담당 쓰레드(Dispatchers.IO)**의 코루틴에서 실행 |
| `Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q` | Android 10(Q) 이상이면 MediaStore 방식, 미만이면 옛 방식 |
| `ContentValues` | DB에 넣을 열 이름-값 묶음 (파일 이름, MIME 형식, 저장 경로) |
| `IS_PENDING` 1 → 0 | 저장하는 동안 다른 앱 접근 **차단** → 끝나면 **허용** |
| `contentResolver.insert / update / delete` | 공유 저장소 목록에 추가·수정·삭제 (U10에서 설명) |
| `?: run { … }` | 앞의 값이 null일 때 블록을 실행 |
| `imageUri?.let { … }` | imageUri가 null이 아닐 때만 버튼 표시 |
| `Intent(Intent.ACTION_VIEW, uri)` | 그 URI를 **보여 줄 수 있는 앱**을 실행 |

- **인텐트**는 작업을 요청하는 메시지 객체입니다. 액티비티를 실행할 조건과 전달할 자료를 담습니다.
- 웹 페이지 열기: `Intent(Intent.ACTION_VIEW, Uri.parse("https://www.android.com"))`

### 사진 선택 도구 — Photo Picker

- 미디어 라이브러리 전체가 아니라 **사용자가 고른 그림·동영상에만** 접근 권한을 줍니다. Android 11(API 30) 이상에서 쓸 수 있습니다. [S28]
- 한 개만 고르는 **`PickVisualMedia`**, 여러 개를 고르는 **`PickMultipleVisualMedia`**가 있습니다.

프로젝트 8.1.4 Photo Picker Demo (그림 표시에 Coil 사용 — U09 참고)

```kotlin
// build.gradle.kts
dependencies {
    implementation("io.coil-kt.coil3:coil-compose:3.1.0")   // Coil
}
```

```kotlin
@Composable
fun PhotoPickerDemoApp(modifier: Modifier = Modifier) {
    var uri: Uri? by remember { mutableStateOf(null) }
    val context = LocalContext.current
    val pickMedia = rememberLauncherForActivityResult(PickVisualMedia()) {
        uri = it
        val message = if (it != null) "선택한 이미지의 URI: $it" else "선택한 이미지 없음"
        Toast.makeText(context, message, Toast.LENGTH_LONG).show()
    }
    Column(modifier) {
        Button(onClick = {
            pickMedia.launch(PickVisualMediaRequest(PickVisualMedia.ImageOnly))
        }) { Text("선택") }
        AsyncImage(uri, "")
    }
}
```

- `rememberLauncherForActivityResult(계약) { 결과 -> }`: 다른 화면(선택 도구)을 띄우고, **결과를 받아** 람다를 실행합니다.
- 고를 대상: **`ImageOnly`**(그림), `VideoOnly`(동영상), `ImageAndVideo`(둘 다)
- `AsyncImage(uri, …)`: Coil이 URI의 그림을 비동기로 불러와 표시합니다.

[교육용 설명] 교재 원문은 Toast에 `text`를 넘기는데, 그런 변수가 없어 오류가 납니다. 위 코드처럼 `message`를 넘겨야 합니다.

### 데이터베이스와 Room

- **데이터베이스(DB)**: 공유를 목적으로 컴퓨터에 저장한 **체계적인 자료 모음**입니다. 이를 관리하는 프로그램이 **DBMS**이고, MySQL 같은 관계형 DBMS는 **RDBMS**입니다.
- 안드로이드는 **SQLite**를 씁니다.
- **Room**: SQLite 위의 **추상화 레이어**인 Jetpack 라이브러리입니다. SQLite를 직접 쓰는 것보다 작업이 훨씬 간단합니다. [S29]

| 용어 | 뜻 | Room에서 |
|---|---|---|
| 테이블 | 공통 요소를 저장하는 표 (과일, 야채 …) | `@Entity(tableName = "fruits")` |
| 레코드(행) | 한 품목 | **데이터 클래스** 하나 |
| 기본 키 | 레코드를 구별하는 값 | `@PrimaryKey(autoGenerate = true)` |
| 쿼리 | DB에 전달하는 명령 | `@Query("SELECT …")` |
| DAO | DB와 연결해 삽입·수정·삭제·조회하는 **파이프** | `@Dao interface` |

### Room 프로젝트 — 과일 가격표

프로젝트 8.2.1 Room Demo

```kotlin
// build.gradle.kts (Module :app)
plugins {
    // ⋮
    id("com.google.devtools.ksp") version "2.1.10-1.0.31"
}
dependencies {
    // Room
    implementation("androidx.room:room-runtime:2.6.1")
    ksp("androidx.room:room-compiler:2.6.1")
    implementation("androidx.room:room-ktx:2.6.1")
}
```

```kotlin
// app/.../data/Fruit.kt
@Entity(tableName = "fruits")          // DB 테이블 지정
data class Fruit(                      // DB 레코드 = 행
    @PrimaryKey(autoGenerate = true)
    val id: Int = 0,                   // 아이디 (자동 생성)
    val name: String,                  // 이름
    val price: Int                     // 가격
)

// app/.../data/ItemDao.kt
@Dao
interface ItemDao {
    @Insert
    suspend fun insert(fruit: Fruit)

    @Query("SELECT * from fruits where id = :id")
    fun getFruit(id: Int): Flow<Fruit>
}

// app/.../data/ItemDatabase.kt
const val DB_NAME = "item_database"

@Database(entities = [Fruit::class], version = 1)
abstract class ItemDatabase : RoomDatabase() {
    abstract fun itemDao(): ItemDao        // dao를 반환하는 추상 메서드가 있어야 한다

    companion object {
        @Volatile
        private var Instance: ItemDatabase? = null

        fun getDatabase(context: Context): ItemDatabase {
            // Instance가 null이 아니면 반환, null이면 만들어서 반환 (singleton pattern)
            return Instance ?: synchronized(this) {
                Room.databaseBuilder(context, ItemDatabase::class.java, DB_NAME)
                    .build()
                    .also { Instance = it }
            }
        }
    }
}
```

| 코드 | 뜻 |
|---|---|
| `ksp(...)` | Room이 주석을 읽어 코드를 **자동 생성**하는 컴파일러 (KSP 플러그인 필요) |
| `:id` | 쿼리 안에서 함수 매개 변수 `id`를 가리킴 |
| `Flow<Fruit>` | DB가 바뀌면 새 값을 **방출**하는 흐름 |
| `suspend fun insert` | 쿼리는 시간이 걸리므로 **코루틴에서** 실행 |
| **싱글톤 패턴** | DB 객체는 **앱에 하나만**. 여러 객체가 동시에 고치면 혼선이 생김 |
| `@Volatile` | 휘발성 변수. 읽기·쓰기가 주 메모리에서 일어나 **모든 쓰레드가 항상 최신 값**을 봄 |
| `synchronized(this) { }` | 한 번에 한 쓰레드만 블록 실행 (객체가 두 번 만들어지는 것 방지) |
| `.also { Instance = it }` | 만든 객체를 Instance에 저장하고 그 객체를 그대로 반환 |

```kotlin
// app/.../ui/FruitScreen.kt
@Composable
fun FruitScreen(dao: ItemDao, modifier: Modifier = Modifier) {
    val coroutineScope = rememberCoroutineScope()
    Column(modifier) {
        InputPart(dao, coroutineScope, Modifier.fillMaxWidth())
        DisplayPart(dao, coroutineScope, Modifier.fillMaxWidth())
    }
}

@Composable
fun InputPart(dao: ItemDao, coroutineScope: CoroutineScope, modifier: Modifier) {
    var name by remember { mutableStateOf("") }
    var price by remember { mutableStateOf("") }
    Row(
        modifier = modifier,
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        OutlinedTextField(value = name, onValueChange = { name = it },
            modifier = Modifier.width(150.dp), label = { Text("이름") })
        OutlinedTextField(value = price, onValueChange = { price = it },
            modifier = Modifier.width(150.dp), label = { Text("가격") })
        Button(onClick = {
            coroutineScope.launch {
                insertFruit(name, price, dao)
                name = ""
                price = ""
            }
        }) { Text("추가") }
    }
}

@Composable
fun DisplayPart(dao: ItemDao, coroutineScope: CoroutineScope, modifier: Modifier) {
    var id by remember { mutableStateOf("") }
    var fruit: Fruit? by remember { mutableStateOf(null) }
    Column(modifier) {
        Row(Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
            OutlinedTextField(value = id, onValueChange = { id = it },
                modifier = Modifier.width(100.dp), label = { Text("id") })
            Spacer(Modifier.width(20.dp))
            Button(onClick = {
                coroutineScope.launch {
                    fruit = getFruit(id, dao)
                    id = ""
                }
            }) { Text("불러오기") }
        }
        Text(text = fruit?.toText() ?: "", modifier = Modifier.padding(8.dp))
    }
}

fun isValid(name: String, price: String): Boolean {
    return name.isNotBlank() && price.isNotBlank()
}

suspend fun insertFruit(name: String, price: String, dao: ItemDao) {
    if (isValid(name, price)) {
        val fruit = Fruit(name = name, price = price.toIntOrNull() ?: 0)
        dao.insert(fruit)
    }
}

suspend fun getFruit(id: String, dao: ItemDao): Fruit? {
    return try {
        dao.getFruit(id.toInt()).first()
    } catch (e: NullPointerException) {
        null
    }
}

fun Fruit.toText(): String {
    return "id: $id, name: $name, price: $price"
}

// MainActivity.kt
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // deleteDatabase("item_database")   // 데이터베이스를 초기화하려면 활성화한다
        val dao = ItemDatabase.getDatabase(this).itemDao()
        enableEdgeToEdge()
        setContent {
            RoomDemoTheme {
                Scaffold { innerPadding ->
                    FruitScreen(dao, Modifier.padding(innerPadding))
                }
            }
        }
    }
}
```

- `Fruit(name = name, price = …)`: id는 기본값 0을 주면 Room이 **자동으로 번호를 매깁니다.**
- `Flow.first()`: 흐름의 **첫 값**만 받고 끝납니다(suspend).
- 저장된 자료는 **View > Tool Windows > App Inspection**에서 테이블 `fruits`를 더블 클릭해 확인하고, 쿼리도 직접 실행할 수 있습니다.

### Room + ViewModel 구조화

프로젝트 8.2.2 Room With ViewModel: 같은 자료를 **ViewModel**로 관리합니다. Compose가 권장하는 구조입니다.

```kotlin
// build.gradle.kts — Room(8.2.1과 같음) + ViewModel
implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.7")
```

```kotlin
// app/.../data/ItemDao.kt
@Dao
interface ItemDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(fruit: Fruit)

    @Update
    suspend fun update(fruit: Fruit)

    @Delete
    suspend fun delete(fruit: Fruit)

    @Query("SELECT * from fruits ORDER BY name ASC")   // 이름 오름차순
    fun getAllFruits(): Flow<List<Fruit>>

    @Query("SELECT * from fruits WHERE id = :id")
    fun getFruit(id: Int): Flow<Fruit>
}

// app/.../data/AppContainer.kt — DAO를 담는 그릇
class AppContainer(private val context: Context) {
    val itemDao: ItemDao by lazy {
        ItemDatabase.getDatabase(context).itemDao()
    }
}

// app/.../ui/FruitViewModel.kt
class FruitViewModel(val itemDao: ItemDao) : ViewModel() {
    var inputUiState by mutableStateOf(InputUiState())
        private set

    val displayUiState: StateFlow<DisplayUiState> = itemDao.getAllFruits()
        .map { DisplayUiState(it) }
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5_000L),
            initialValue = DisplayUiState()
        )

    fun updateInputUiState(inputUiState: InputUiState) {
        this.inputUiState = inputUiState
    }

    fun saveFruit() {
        if (inputUiState.name.isNotBlank() && inputUiState.grade.isNotBlank()) {
            viewModelScope.launch {
                itemDao.insert(inputUiState.toFruit())
            }
            inputUiState = InputUiState()
        }
    }

    companion object {
        val Factory: ViewModelProvider.Factory = viewModelFactory {
            initializer {
                val application = this[APPLICATION_KEY] as InventoryApplication
                val itemDao = application.appContainer.itemDao
                FruitViewModel(itemDao)
            }
        }
    }
}

data class DisplayUiState(val fruitList: List<Fruit> = listOf())
data class InputUiState(val name: String = "", val grade: String = "") {
    fun toFruit() = Fruit(name = name, price = grade.toIntOrNull() ?: 0)
}
```

| 코드 | 뜻 |
|---|---|
| `@Insert(onConflict = REPLACE)` | 기본 키가 겹치면 **교체** |
| `@Update`, `@Delete` | 수정, 삭제 |
| `ORDER BY name ASC` | 이름 **오름차순** 정렬 (내림차순은 DESC) |
| `getAllFruits(): Flow<List<Fruit>>` | DB가 수정될 때마다 **새 목록을 방출** |
| `.map { DisplayUiState(it) }` | Flow 안의 값을 DisplayUiState로 변환 |
| `.stateIn(scope, started, initialValue)` | Flow를 **StateFlow**로 바꾸고 최신 값으로 유지 |
| `viewModelScope` | ViewModel이 살아 있는 동안의 코루틴 범위 |
| `WhileSubscribed(5_000L)` | 구독자가 없어진 뒤 5초까지 유지 (화면 회전 중 끊기지 않게) |
| `by lazy { }` | **처음 쓸 때** 한 번만 만들기 |

- **ViewModel 생성자에 매개 변수가 있으면** `viewModel()`만으로는 만들 수 없습니다. **`ViewModelProvider.Factory`**를 만들어 `initializer { }`에 생성 방법을 적습니다.
- `this[APPLICATION_KEY]`로 **Application 객체**를 꺼내, 그 안의 `appContainer.itemDao`를 넘깁니다.

```kotlin
// app/.../ui/FruitScreen.kt
@Composable
fun FruitScreen(
    modifier: Modifier = Modifier,
    viewModel: FruitViewModel = viewModel(factory = FruitViewModel.Factory)
) {
    val displayUiState by viewModel.displayUiState.collectAsState()
    Column(modifier) {
        InputPart(
            inputUiState = viewModel.inputUiState,
            onValueChange = { inputUiState -> viewModel.updateInputUiState(inputUiState) },
            onSave = { viewModel.saveFruit() },
            modifier = Modifier.fillMaxWidth()
        )
        DisplayPart(fruitList = displayUiState.fruitList, modifier = Modifier.fillMaxWidth())
    }
}

@Composable
fun InputPart(
    inputUiState: InputUiState,
    onValueChange: (InputUiState) -> Unit,
    onSave: () -> Unit,
    modifier: Modifier
) {
    Row(
        modifier = modifier,
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        OutlinedTextField(
            value = inputUiState.name,
            onValueChange = { onValueChange(inputUiState.copy(name = it)) },
            modifier = Modifier.width(150.dp),
            label = { Text("이름") }
        )
        OutlinedTextField(
            value = inputUiState.grade,
            onValueChange = { onValueChange(inputUiState.copy(grade = it)) },
            modifier = Modifier.width(150.dp),
            label = { Text("가격") }
        )
        Button(onClick = onSave) { Text("저장") }
    }
}

@Composable
fun DisplayPart(fruitList: List<Fruit>, modifier: Modifier) {
    LazyColumn(modifier) {
        items(items = fruitList) { fruit ->
            Row {
                Text("${fruit.id}")
                Text(fruit.name)
                Text("${fruit.price}")
            }
        }
    }
}

// app/.../InventoryApplication.kt
class InventoryApplication : Application() {
    lateinit var appContainer: AppContainer
    override fun onCreate() {
        super.onCreate()
        appContainer = AppContainer(this)
    }
}
```

```xml
<!-- app/manifests/AndroidManifest.xml -->
<application
    android:name=".InventoryApplication"
    ⋯ >
```

- 데이터 흐름: DB 수정 → `getAllFruits()`가 새 목록을 방출 → `displayUiState` 갱신 → `collectAsState()` → **UI 자동 리컴포지션**
- **Application 객체**: 안드로이드 앱 자체입니다. 여기에 저장한 자료는 **앱이 종료될 때까지** 유지됩니다. 파생 클래스를 만들었으면 **매니페스트의 `android:name`에 등록**해야 쓰입니다.
- `lateinit var`: 선언할 때가 아니라 **나중에(onCreate에서)** 초기화하겠다는 표시입니다.

### WorkManager — 백그라운드 작업

**WorkManager**는 안드로이드가 권장하는 **작업 스케줄러**입니다. 앱 프로세스가 실행 중인지와 상관없이 백그라운드 작업을 실행·예약하고, **앱이 종료되거나 기기를 다시 켜도 계속 실행됩니다.** 실행이 보장되어야 하는 작업에 씁니다. [S30]

```kotlin
// build.gradle.kts
implementation("androidx.work:work-runtime-ktx:2.10.1")
```

| 클래스 | 뜻 |
|---|---|
| `Worker` | **동기** 백그라운드 작업 |
| `CoroutineWorker` | **비동기**(코루틴) 백그라운드 작업. `doWork()`를 오버라이드 |
| `OneTimeWorkRequest` | **한 번만** 실행할 작업 요청 |
| `PeriodicWorkRequest` | **주기적으로** 실행할 작업 요청 |

프로젝트 8.3.1 WorkManager Demo: 리소스 그림을 흐리게(blur) 만들어 내부 저장소에 저장합니다.

```kotlin
// app/.../BitmapUtils.kt
fun Bitmap.blur(): Bitmap {
    val scaled = scale(width / 10, height / 10)   // 축소
    return scaled.scale(width, height)            // 확대 → 흐려짐
}
fun Context.bitmapFromResource(@DrawableRes imageId: Int): Bitmap =
    BitmapFactory.decodeResource(resources, imageId)
fun Context.writeBitmap(bitmap: Bitmap, filename: String) {
    val file = File(filesDir, filename)
    val outputStream = FileOutputStream(file)
    bitmap.compress(Bitmap.CompressFormat.PNG, 100, outputStream)
}
fun Context.loadBitmap(filename: String): Bitmap? {
    val file = File(filesDir, filename)
    return if (file.exists()) BitmapFactory.decodeFile(file.absolutePath) else null
}
fun Context.deleteBitmap(filename: String) = File(filesDir, filename).delete()

// app/.../BlurWorker.kt
@DrawableRes
val imageId = R.drawable.tree2
const val OUTPUT_FILENAME = "blur-tree.png"

class BlurWorker(
    context: Context,
    params: WorkerParameters
) : CoroutineWorker(context, params) {
    override suspend fun doWork(): Result {
        delay(3_000L)                                    // 의도적 지연
        return withContext(Dispatchers.IO) {
            return@withContext try {
                val picture = applicationContext.bitmapFromResource(imageId)
                val outputBitmap = picture.blur()
                applicationContext.writeBitmap(outputBitmap, OUTPUT_FILENAME)
                Result.success()
            } catch (_: Throwable) {
                Result.failure()
            }
        }
    }
}

// app/.../WorkManagerUtils.kt
fun blurAndSave(context: Context) {
    val workManager = WorkManager.getInstance(context)
    val workRequest = OneTimeWorkRequestBuilder<BlurWorker>().build()
    workManager.enqueue(workRequest)                     // 백그라운드 작업 등록
}

// MainActivity.kt
@Composable
fun WorkManagerDemoApp(modifier: Modifier = Modifier) {
    val context = LocalContext.current
    var bitmap: Bitmap? by remember { mutableStateOf(null) }
    Column(modifier) {
        Row {
            Button(onClick = { blurAndSave(context) }) { Text("Blur and Save") }
            Button(onClick = { bitmap = context.loadBitmap(OUTPUT_FILENAME) }) { Text("Load and Show") }
        }
        Row {
            val modifier = Modifier.size(133.dp, 177.dp)
            Image(painter = painterResource(imageId), contentDescription = null, modifier = modifier)
            Spacer(modifier = Modifier.width(16.dp))
            bitmap?.let {
                Image(bitmap = it.asImageBitmap(), contentDescription = null, modifier = modifier)
            }
        }
    }
}
```

- `doWork()`는 결과로 **`Result.success()`** 또는 **`Result.failure()`**를 돌려줍니다.
- `return@withContext`: 람다(withContext 블록)에서 값을 돌려주는 **레이블 반환**입니다.
- [Blur and Save]를 누르고 **3초 안에** [Load and Show]를 누르면 아직 저장되지 않아 변화가 없습니다.
- 진행 상황은 **App Inspection → Background Task Inspector** 탭에서 봅니다.

### 고유 작업과 취소

**고유 작업(unique work)**: 특정 **이름**의 작업이 한 번에 **하나만** 실행되도록 보장합니다. 이름이 같은 작업이 또 들어오면 어떻게 할지 `ExistingWorkPolicy`로 정합니다.

| ExistingWorkPolicy | 같은 이름의 작업이 대기 중일 때 |
|---|---|
| `APPEND` / `APPEND_OR_REPLACE` | 그 작업(과 후속 작업)이 끝난 **뒤에** 실행 |
| **`KEEP`** | **아무것도 하지 않음** (새 작업 무시) |
| `REPLACE` | 대기 중인 작업을 **취소하고 새 작업으로 대체** |

프로젝트 8.3.2 Unique Work Demo (BitmapUtils·BlurWorker는 8.3.1과 같음)

```kotlin
// app/.../WorkManagerUtils.kt
const val BLUR_WORK_NAME = "Blur Work"

fun blurAndSave(context: Context) {
    val workManager = WorkManager.getInstance(context)
    val workRequest = OneTimeWorkRequestBuilder<BlurWorker>().build()
    workManager.enqueueUniqueWork(
        BLUR_WORK_NAME,
        ExistingWorkPolicy.KEEP,
        workRequest
    )
}

fun cancelWork(context: Context) {
    val workManager = WorkManager.getInstance(context)
    workManager.cancelUniqueWork(BLUR_WORK_NAME)
}

// MainActivity.kt
@Composable
fun UniqueWorkDemoApp(modifier: Modifier = Modifier) {
    val context = LocalContext.current
    Column(modifier) {
        Row {
            Button(onClick = { context.deleteBitmap(OUTPUT_FILENAME) }) { Text("Delete Bitmap") }
            Button(onClick = { blurAndSave(context) }) { Text("Blur and Save") }
            Button(onClick = { cancelWork(context) }) { Text("Cancel Work") }
        }
    }
}
```

- 등록할 때 쓴 **이름으로 취소**합니다: `cancelUniqueWork(BLUR_WORK_NAME)`
- 시간이 오래 걸리는 작업은 사용자가 **취소할 수 있어야** 합니다.

### 연쇄 작업

여러 작업을 **이어서** 실행합니다. 앞 작업의 결과물을 다음 작업이 받아 쓸 수도 있습니다.

| 함수 | 뜻 |
|---|---|
| `workManager.beginWith(request)` | 첫 작업 등록 → **WorkContinuation** 반환 |
| `continuation.then(request)` | 다음 작업 추가 |
| `continuation.enqueue()` | 전체를 백그라운드에 등록 |
| `setInputData(data)` / `inputData.getString(키)` | 작업에 자료 넘기기 / 받기 |
| `Result.success(data)` | 다음 작업으로 **결과 자료 전달** |

프로젝트 8.3.3 Worker Chain Demo: **Cleanup → Blur → Save** 순서로 실행합니다.

```kotlin
// app/.../workers/BitmapUtils.kt
const val INTERNAL_FILENAME = "blur-tree-output.png"
const val MEDIA_STORE_FILENAME = "blur-tree.png"
const val KEY_RESOURCE_URI = "KEY_RESOURCE_URI"
const val KEY_INTERNAL_URI = "KEY_INTERNAL_URI"

fun Context.bitmapFromUri(uriString: String): Bitmap {
    return BitmapFactory.decodeStream(contentResolver.openInputStream(uriString.toUri()))
}
fun Context.writeBitmap(bitmap: Bitmap, file: File) {
    val outputStream = FileOutputStream(file)
    bitmap.compress(Bitmap.CompressFormat.PNG, 100, outputStream)
}
// Bitmap.blur()는 8.3.1과 같음

// app/.../workers/CleanupWorker.kt — 내부 저장소에 저장한 파일을 지운다
class CleanupWorker(context: Context, params: WorkerParameters) : CoroutineWorker(context, params) {
    override suspend fun doWork(): Result {
        Log.d("CleanupWorker", "CleanupWorker 시작")
        delay(2_000L)
        return withContext(Dispatchers.IO) {
            if (deleteFiles(applicationContext.filesDir)) Result.success() else Result.failure()
        }
    }
}

fun deleteFiles(dir: File): Boolean {
    return try {
        val files = dir.listFiles()
        if (files != null)
            for (file in files)
                file.delete()
        true
    } catch (_: Exception) {
        false
    }
}

// app/.../workers/BlurWorker.kt
class BlurWorker(context: Context, params: WorkerParameters) : CoroutineWorker(context, params) {
    override suspend fun doWork(): Result {
        Log.d("BlurWorker", "BlurWorker 시작")
        delay(2_000L)
        return withContext(Dispatchers.IO) {
            return@withContext try {
                val uriString = inputData.getString(KEY_RESOURCE_URI)
                    ?: return@withContext Result.failure()
                val picture = applicationContext.bitmapFromUri(uriString)
                val outputBitmap = picture.blur()
                // 내부 저장소에 저장
                val file = File(applicationContext.filesDir, INTERNAL_FILENAME)
                applicationContext.writeBitmap(outputBitmap, file)
                // 내부 저장소 파일의 URI를 Data에 담아 다음 Worker로 전달
                val data = Data.Builder()
                    .putString(KEY_INTERNAL_URI, Uri.fromFile(file).toString())
                    .build()
                Result.success(data)
            } catch (e: Throwable) {
                Log.e("BlurWorker", "블러 처리 중 오류 발생", e)
                Result.failure()
            }
        }
    }
}

// app/.../workers/SaveWorker.kt — 내부 저장소 파일을 읽어 MediaStore에 저장
class SaveWorker(context: Context, params: WorkerParameters) : CoroutineWorker(context, params) {
    override suspend fun doWork(): Result {
        Log.d("SaveWorker", "SaveWorker 시작")
        delay(2_000L)
        return withContext(Dispatchers.IO) {
            return@withContext try {
                val outputUri = inputData.getString(KEY_INTERNAL_URI)   // BlurWorker가 내보낸 자료
                    ?: return@withContext Result.failure()
                val bitmap = applicationContext.bitmapFromUri(outputUri)
                saveImage(applicationContext, MEDIA_STORE_FILENAME, bitmap)  // 8.1.3과 같은 방식
                Result.success()
            } catch (e: Exception) {
                Log.e("SaveWorker", "파일 저장 중 오류 발생", e)
                Result.failure()
            }
        }
    }
}

// app/.../WorkManagerUtils.kt
fun startWorkerChain(context: Context, imageUri: Uri) {
    val workManager = WorkManager.getInstance(context)
    val cleanupRequest = OneTimeWorkRequestBuilder<CleanupWorker>().build()
    var continuation = workManager.beginWith(cleanupRequest)

    val data = Data.Builder()
        .putString(KEY_RESOURCE_URI, imageUri.toString())
        .build()
    val blurRequest = OneTimeWorkRequestBuilder<BlurWorker>()
        .setInputData(data)
        .build()
    continuation = continuation.then(blurRequest)

    val saveRequest = OneTimeWorkRequestBuilder<SaveWorker>().build()
    continuation = continuation.then(saveRequest)

    continuation.enqueue()
}

// MainActivity.kt
@Composable
fun WorkerChainDemoApp(modifier: Modifier) {
    val context = LocalContext.current
    Column(modifier) {
        Button(onClick = {
            val imageUri = context.getImageUri(R.drawable.tree2)
            startWorkerChain(context, imageUri)
        }) { Text("Start Worker Chain") }
    }
}

fun Context.getImageUri(@DrawableRes id: Int): Uri {
    val resources = this.resources
    return Uri.Builder()
        .scheme(ContentResolver.SCHEME_ANDROID_RESOURCE)
        .authority(resources.getResourcePackageName(id))
        .appendPath(resources.getResourceTypeName(id))
        .appendPath(resources.getResourceEntryName(id))
        .build()
}
```

- 자료 전달 경로
  1. `startWorkerChain`이 `setInputData(KEY_RESOURCE_URI)`로 BlurWorker에 넘깁니다.
  2. BlurWorker가 `Result.success(data(KEY_INTERNAL_URI))`로 SaveWorker에 넘깁니다.
  3. SaveWorker는 `inputData.getString(KEY_INTERNAL_URI)`로 받습니다.
- `getImageUri`: 리소스 그림의 URI(`android.resource://패키지/drawable/이름`)를 만듭니다.
- 결과는 **사진 앱**의 공유 저장소에서 볼 수 있습니다.

### 교재 연습문제 풀이

**8.1.2** `MODE_PRIVATE`를 `MODE_APPEND`로 바꾸면?

<details><summary>정답 보기</summary>

저장할 때마다 파일을 새로 만들지 않고 **기존 내용 뒤에 이어 씁니다.** 그래서 첫 줄만 읽는 ReadPart에는 처음 저장한 내용만 계속 보입니다.

</details>

**8.1.3** 파일 전체를 표시하시오.

<details><summary>정답 보기</summary>

```kotlin
context.openFileInput(filename).reader().use {
    readText = it.readText()
}
```

</details>

**8.1.6** 지울 파일이 있을 때만 [Delete]를 활성화하시오.

<details><summary>정답 보기</summary>

```kotlin
Button(
    onClick = { file.delete(); fileExist = false },
    enabled = fileExist
) { Text("Delete") }
```

</details>

**8.2.1** Fruit에 수량 필드 quantity를 추가하시오.

<details><summary>정답 보기</summary>

```kotlin
@Entity(tableName = "fruits")
data class Fruit(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val name: String,
    val price: Int,
    val quantity: Int = 0
)
```

입력 칸과 `toText()`에도 quantity를 추가합니다. 테이블 구조가 바뀌었으므로 `@Database(version = 2)`로 올리거나, 실습 중에는 `deleteDatabase("item_database")`로 DB를 초기화합니다.

</details>

**8.2.3** [가격]과 [id] 칸에 숫자만 입력되게 하시오.

<details><summary>정답 보기</summary>

`keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)`

</details>

**8.2.4** 자료를 id 순서로 출력하시오.

<details><summary>정답 보기</summary>

`@Query("SELECT * from fruits ORDER BY id ASC")`

</details>

**8.3.5** 연쇄 작업을 취소하는 버튼을 추가하시오.

<details><summary>정답 보기</summary>

`beginUniqueWork("chain", ExistingWorkPolicy.REPLACE, cleanupRequest)`로 이름을 붙여 시작합니다. 취소 버튼에서는 `WorkManager.getInstance(context).cancelUniqueWork("chain")`을 호출합니다.

</details>

### 시험 대비: 빈칸 채우기

```kotlin
context.【①】(filename, Context.MODE_PRIVATE)   // 쓰기 스트림
    .writer()
    .【②】 { it.write(inputText) }               // 자동으로 닫기
context.【③】(filename)                          // 읽기 스트림
    .reader()
    .use { readText = it.readLines()[0] }

bitmap.【④】(Bitmap.CompressFormat.PNG, 100, file.outputStream())   // 그림 저장
Image(bitmap = bitmap.【⑤】(), contentDescription = null)            // Compose에 표시
```

<details><summary>정답 보기</summary>

① `openFileOutput` ② `use` ③ `openFileInput` ④ `compress` ⑤ `asImageBitmap`

</details>

```kotlin
@【①】(tableName = "fruits")
data class Fruit(
    @【②】(autoGenerate = true) val id: Int = 0,
    val name: String,
    val price: Int
)

@【③】
interface ItemDao {
    @Insert
    【④】 fun insert(fruit: Fruit)
    @Query("SELECT * from fruits where id = 【⑤】")
    fun getFruit(id: Int): Flow<Fruit>
}

@Database(entities = [Fruit::class], version = 1)
abstract class ItemDatabase : 【⑥】() {
    abstract fun itemDao(): ItemDao
}
```

<details><summary>정답 보기</summary>

① `Entity` ② `PrimaryKey` ③ `Dao` ④ `suspend` ⑤ `:id` ⑥ `RoomDatabase`

</details>

```kotlin
class BlurWorker(context: Context, params: WorkerParameters) : 【①】(context, params) {
    override suspend fun 【②】(): Result {
        // ⋮
        return Result.【③】()
    }
}
val workRequest = 【④】<BlurWorker>().build()
WorkManager.getInstance(context).【⑤】(workRequest)       // 등록
workManager.enqueueUniqueWork(NAME, ExistingWorkPolicy.【⑥】, workRequest)  // 대기 중이면 무시
```

<details><summary>정답 보기</summary>

① `CoroutineWorker` ② `doWork` ③ `success` ④ `OneTimeWorkRequestBuilder` ⑤ `enqueue` ⑥ `KEEP`

</details>

### 핵심 정리

- 저장소: **내부(filesDir, 민감 정보) / 외부 앱 전용(getExternalFilesDir) / 공유(MediaStore)**
- 텍스트: `openFileOutput(MODE_PRIVATE|MODE_APPEND).writer().use {}`, `openFileInput().reader().use {}`
- 그림: `compress()`로 저장, `BitmapFactory.decode…()`로 읽기, Compose에 표시할 때는 `asImageBitmap()`
- MediaStore: `Dispatchers.IO`에서 `ContentValues` + `insert` + `IS_PENDING 1→0`. Photo Picker는 `PickVisualMedia` + `rememberLauncherForActivityResult`
- Room: **@Entity(행) · @Dao(파이프, @Insert/@Query) · @Database(싱글톤)**, KSP 필요, 쿼리는 suspend나 Flow
- 구조화: ViewModel + `Factory`(생성자 매개 변수) + `stateIn` + Application(매니페스트 등록)
- WorkManager: `CoroutineWorker.doWork()` → `OneTimeWorkRequest` → `enqueue` / `enqueueUniqueWork(KEEP|REPLACE)` / `beginWith().then().enqueue()`

---

# U09. 네트워크 통신

### 오늘의 목표

- 클라이언트·서버, HTTP 요청 방식(GET·POST), REST·JSON을 설명할 수 있다.
- 메인 쓰레드에서 네트워크 작업을 하면 안 되는 이유와 `Dispatchers.IO`를 설명할 수 있다.
- 인터넷 권한을 매니페스트에 넣고, `URL.openConnection()`으로 텍스트·그림을 내려받을 수 있다.
- Retrofit으로 서비스 인터페이스(`@GET`)를 만들어 문자열과 JSON을 받을 수 있다.
- `@Serializable`·`@SerialName`과 sealed interface `UiState`로 로딩·성공·실패를 표현할 수 있다.
- Coil의 `AsyncImage`로 웹 그림을 표시하고, LazyVerticalGrid로 목록을 보여 줄 수 있다.

### 클라이언트와 서버, HTTP

**네트워크 통신(network communication)**은 앱과 외부 서버가 자료를 주고받는 과정입니다.

| 주체 | 역할 | 예 |
|---|---|---|
| **클라이언트(client)** | 요청을 보내는 쪽 | 우리의 안드로이드 앱 |
| **서버(server)** | 요청받은 자료를 보내는 쪽 | 뉴스 서버 |

- 뉴스 앱이 `GET https://example.com/news.json`을 보내면, 서버가 `news.json`을 보내 줍니다. 이렇게 **요청(request)과 응답(response)**을 주고받는 방식이 **HTTP 통신**입니다.
- **HTTP(hypertext transfer protocol)**: 웹에서 정보를 주고받는 규칙(약속)입니다.

| 요청 방식 | 용도 | 예 |
|---|---|---|
| **GET** | 서버에 자료를 **요청** | `GET https://api.example.com/users` → 모든 사용자 정보를 달라 |
| **POST** | 서버에 자료를 **보냄** | `POST https://api.example.com/login` → 로그인 정보를 보낸다 |
| PUT / DELETE | 수정 / 삭제 | |

- **REST(representational state transfer)**: 오늘날 대부분의 웹 서버가 쓰는 웹 아키텍처입니다. HTTP로 자원을 제공하고 GET·POST·PUT·DELETE를 지원합니다. 이를 제공하는 서비스가 **RESTful 서비스**입니다.
- REST API는 보통 **JSON**으로 응답합니다. JSON은 가볍고 사람이 읽기 쉬운 **키-값** 형식입니다.

```json
{
  "name": "홍길동",
  "email": "hong@example.com"
}
```

### 메인 쓰레드와 Dispatchers.IO

- **메인 쓰레드(UI 쓰레드)에서는 네트워크 작업을 할 수 없습니다.** 오래 걸리는 작업이 UI를 멈추게 하기 때문입니다. 시도하면 예외 **`android.os.NetworkOnMainThreadException`**이 납니다.
- 그래서 항상 **백그라운드 쓰레드**에서 실행합니다.
- **`Dispatchers.IO`**: 입출력에 최적화된 **쓰레드 풀(thread pool)**입니다. 작업이 들어오면 풀에서 쉬는 쓰레드를 꺼내 맡기고, 끝나면 풀에 돌려줘 다시 씁니다.

**Compose에서의 네트워크 처리**: 네트워크 작업도 **상태**로 다룹니다. ViewModel이 상태를 관리하고, Compose는 상태에 따라 다른 UI를 보여 줍니다.

```text
           ┌─ 요청 성공 ─▶ 성공 상태
로딩 상태 ─┤
           └─ 요청 실패 ─▶ 실패 상태
```

### 텍스트 파일 다운로드

네트워크 파일도 **서버와 연결된 스트림**만 열면, 디스크 파일을 읽는 것과 같습니다.

프로젝트 9.2.1 Text Download Demo

```xml
<!-- app/manifests/AndroidManifest.xml — 인터넷 접속 허가 -->
<uses-permission android:name="android.permission.INTERNET"/>
<application
    ⋯ >
```

```kotlin
// app/.../ReadFile.kt
const val FILE_URL = "https://ks0x00.github.io/fractal/list.json"

suspend fun readLines(): List<String> {
    val url = URL(FILE_URL)
    val connection = url.openConnection()
    connection.connect()
    val inputStream = connection.getInputStream()
    return inputStream.reader(Charsets.UTF_8).use {
        it.readLines()
    }
}

// MainActivity.kt
@Composable
fun TextDownloadDemoApp(modifier: Modifier = Modifier) {
    val scope = rememberCoroutineScope()
    var fileContents by remember { mutableStateOf("") }
    Column(modifier) {
        Button(onClick = {
            scope.launch {
                val lines = withContext(Dispatchers.IO) {
                    readLines()
                }
                fileContents = lines.joinToString("\n")
            }
        }) { Text("Download Text") }
        Text(fileContents)
    }
}
```

| 코드 | 뜻 |
|---|---|
| `<uses-permission android:name="android.permission.INTERNET"/>` | **인터넷 권한**. 없으면 접속 불가 |
| `URL(…).openConnection()` → `connect()` | 서버와 연결 |
| `getInputStream().reader(Charsets.UTF_8)` | 문자 스트림(UTF-8)으로 읽기 |
| `readLines()` | 파일 전체를 줄 단위 `List<String>`으로 |
| `withContext(Dispatchers.IO) { }` | **IO 쓰레드에서** 내려받고, 결과를 돌려받음 |
| `joinToString("\n")` | 목록을 줄바꿈으로 이어 붙임 |

- 통째로 읽으려면 `readLines()` 대신 `readText()`를 씁니다(연습문제 9.2.1).

### 그림 다운로드

프로젝트 9.2.2 Image Download Demo (인터넷 권한 필요)

```kotlin
// app/.../ReadFile.kt
const val IMAGE_URL = "https://ks0x00.github.io/fractal/images/M_230901_204815.png"

fun readImage(): Bitmap {
    val url = URL(IMAGE_URL)
    val connection = url.openConnection()
    connection.connect()
    return connection.inputStream.use {
        BitmapFactory.decodeStream(it)
    }
}

// MainActivity.kt
@Composable
fun ImageDownloadDemoApp(modifier: Modifier = Modifier) {
    val scope = rememberCoroutineScope()
    var bitmap: Bitmap? by remember { mutableStateOf(null) }
    Column(modifier) {
        Button(onClick = {
            scope.launch {
                bitmap = withContext(Dispatchers.IO) {
                    readImage()
                }
            }
        }) { Text("Download Image") }
        bitmap?.ComposeImage()
    }
}

@Composable
fun Bitmap.ComposeImage() {
    val density = LocalDensity.current
    val widthDp = with(density) { width.toDp() }
    val heightDp = with(density) { height.toDp() }
    Image(
        bitmap = asImageBitmap(),
        contentDescription = null,
        modifier = Modifier.size(widthDp, heightDp)
    )
}
```

- `BitmapFactory.decodeStream(스트림)`: 내려받은 바이트로 Bitmap을 만듭니다.
- `LocalDensity.current`로 화면 밀도를 얻고, `with(density) { width.toDp() }`로 그림 픽셀 크기를 dp로 바꿉니다. 그래서 **그림 원래 크기 그대로** 표시됩니다.
- `bitmap?.ComposeImage()`: bitmap이 null이 아닐 때만 확장 컴포저블을 호출합니다.

### Retrofit — 문자열 받기

**Retrofit**은 RESTful 웹 서비스와 통신하는 **외부(서드 파티) 라이브러리**입니다. 자원을 내려받을 뿐 아니라 **JSON을 분석**해 줍니다. 교재는 Retrofit2를 씁니다. [S31]

[교육용 설명] 외부 라이브러리는 커뮤니티가 개발하고 유지합니다. 정기적으로 문제를 고치고 요청에 응답하는, **잘 유지되는 것**을 골라야 합니다.

프로젝트 9.3.1 Retrofit Demo (인터넷 권한 필요)

```kotlin
// build.gradle.kts
dependencies {
    implementation("com.squareup.retrofit2:retrofit:2.11.0")              // retrofit
    implementation("com.squareup.retrofit2:converter-scalars:2.9.0")      // 스칼라(문자열) 변환기
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.7")
}
```

```kotlin
// app/.../network/NetworkService.kt
const val BASE_URL = "https://ks0x00.github.io/fractal/"
const val END_POINT = "index.html"

val retrofit: Retrofit = Retrofit.Builder()
    .addConverterFactory(ScalarsConverterFactory.create())
    .baseUrl(BASE_URL)
    .build()

interface NetworkService {
    @GET(END_POINT)
    suspend fun getContents(): String
}

object NetworkApi {
    val networkService: NetworkService by lazy {
        retrofit.create(NetworkService::class.java)
    }
}

// app/.../ui/AppViewModel.kt
class AppViewModel : ViewModel() {
    var contents by mutableStateOf("")
        private set

    init {
        downloadContents()
    }

    fun downloadContents() {
        viewModelScope.launch {                  // 코루틴
            try {
                contents = NetworkApi.networkService.getContents()
            } catch (e: IOException) {
                contents = "IOException"
            }
        }
    }
}

// app/.../RetrofitDemoApp.kt
@Composable
fun RetrofitDemoApp() {
    Scaffold(topBar = { TopAppBar() }) { innerPaddings ->
        Surface(modifier = Modifier.fillMaxSize().padding(innerPaddings)) {
            val viewModel: AppViewModel = viewModel()
            Text(
                text = viewModel.contents,
                modifier = Modifier.verticalScroll(rememberScrollState())
            )
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TopAppBar() {
    CenterAlignedTopAppBar(
        title = { Text(text = END_POINT, style = MaterialTheme.typography.headlineSmall) }
    )
}
```

**주소 구성**: `https://ks0x00.github.io/fractal/index.html`

| 부분 | 값 |
|---|---|
| BASE_URL (교재: url + base url) | `https://ks0x00.github.io/fractal/` |
| END_POINT | `index.html` |

| 코드 | 뜻 |
|---|---|
| `Retrofit.Builder()…build()` | Retrofit 객체 생성 |
| `addConverterFactory(ScalarsConverterFactory.create())` | 응답을 **문자열 그대로** 변환 |
| `interface NetworkService { @GET(END_POINT) suspend fun … }` | **어떤 요청을 보낼지** 인터페이스로 선언. 구현은 Retrofit이 만듦 |
| `retrofit.create(NetworkService::class.java)` | 인터페이스의 **구현 객체** 생성 |
| `object NetworkApi` | **싱글톤 객체** (앱 전체에 하나) |
| `by lazy { }` | **지연 초기화**: 실제로 필요할 때 처음 만듦 (`= retrofit.create(…)`로 써도 실행은 같음) |
| `init { }` | 생성자가 **가장 먼저** 실행하는 코드 → ViewModel이 만들어지면 바로 다운로드 |
| `try { } catch (e: IOException) { }` | 네트워크 오류(비행기 모드 등) 처리 |
| `Modifier.verticalScroll(rememberScrollState())` | 긴 Text를 **세로 스크롤** |

### Retrofit — JSON 받기

**JSON**은 서버가 클라이언트에 자료를 보낼 때 쓰는 일반적인 **키-값 쌍** 형식입니다. Retrofit으로 JSON을 받아 **분석해 List로** 저장합니다.

`list.json`의 모양

```json
[
  {
    "img_src": "https://…",
    "signature": "…"
  },
  ⋮
]
```

프로젝트 9.3.2 Json Demo (인터넷 권한 필요)

```kotlin
// build.gradle.kts
plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
    id("org.jetbrains.kotlin.plugin.serialization") version "1.9.10"
}
dependencies {
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.7")
    implementation("com.squareup.retrofit2:retrofit:2.11.0")
    implementation("com.squareup.retrofit2:converter-scalars:2.9.0")
    // Retrofit with Kotlin serialization Converter
    implementation("com.jakewharton.retrofit:retrofit2-kotlinx-serialization-converter:1.0.0")
    implementation("com.squareup.okhttp3:okhttp:4.12.0")
    // Kotlin serialization
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.0")
}
```

```kotlin
// app/.../data/FractalImage.kt
@Serializable
data class FractalImage(
    val img_src: String,       // JSON 키와 이름이 같아야 함
    val signature: String
)

// app/.../network/NetworkService.kt
const val BASE_URL = "https://ks0x00.github.io/fractal/"
const val END_POINT = "list.json"

val retrofit: Retrofit = Retrofit.Builder()
    .addConverterFactory(Json.asConverterFactory("application/json".toMediaType()))
    .baseUrl(BASE_URL)
    .build()

interface NetworkService {
    @GET(END_POINT)
    suspend fun getImages(): List<FractalImage>
}

object NetworkApi {
    val networkService: NetworkService by lazy {
        retrofit.create(NetworkService::class.java)
    }
}

// app/.../ui/AppViewModel.kt
sealed interface UiState {
    data object Start : UiState
    data object Loading : UiState
    data class Success(val images: List<FractalImage>) : UiState
    data object Error : UiState
}

class AppViewModel : ViewModel() {
    var uiState: UiState by mutableStateOf(UiState.Start)
        private set

    fun downloadImages() {
        uiState = UiState.Loading
        viewModelScope.launch {
            uiState = try {
                UiState.Success(NetworkApi.networkService.getImages())
            } catch (e: IOException) {
                UiState.Error
            } catch (e: HttpException) {
                UiState.Error
            }
        }
    }
}

// MainActivity.kt
@Composable
fun JsonDemoApp(modifier: Modifier = Modifier) {
    val viewModel: AppViewModel = viewModel()
    Column(modifier = modifier) {
        Button(onClick = { viewModel.downloadImages() }) { Text("Download") }
        val uiState = viewModel.uiState
        Text(
            text = when (uiState) {
                UiState.Start -> "Press Button"
                UiState.Loading -> "Loading"
                is UiState.Success -> uiState.images.joinToString("\n") { it.img_src }
                UiState.Error -> "Error"
            }
        )
    }
}
```

| 코드 | 뜻 |
|---|---|
| **직렬화(serialization)** | 자료를 저장·전송할 수 있는 형태로 바꾸는 것 |
| `@Serializable` | 이 클래스를 직렬화(JSON ↔ 객체 변환)할 수 있다는 표시. **serialization 플러그인** 필요 |
| `Json.asConverterFactory("application/json".toMediaType())` | 응답 JSON을 Kotlin 객체로 바꾸는 변환기 |
| `suspend fun getImages(): List<FractalImage>` | 반환형만 바꾸면 Retrofit이 **분석까지** 해 줌 |
| `sealed interface UiState` | **봉인 인터페이스**: 구현 클래스가 이 파일 안의 것들로 **한정됨** → `when`에서 모든 경우를 빠짐없이 처리 |
| `data object` | 자료가 없는 상태(Start·Loading·Error)는 **객체 하나** |
| `data class Success(val images)` | 성공 상태는 **결과 자료**를 담음 |
| `is UiState.Success ->` | 형식 검사. 그 가지 안에서 `uiState.images`를 바로 쓸 수 있음(스마트 캐스트) |
| `HttpException` | 서버가 오류 코드(404 등)로 응답했을 때 |

### Coil — 웹 그림 표시

웹에서 그림을 받아 보여 주려면 저장·압축 풀기를 해야 하고, UI 응답성을 위해 **우선순위가 낮은 백그라운드 쓰레드**에서 처리해야 합니다. 복잡한 일이라 외부 라이브러리 **Coil**을 씁니다. Coil은 그림을 **다운로드 → 디코딩 → 표시**합니다. [S32]

프로젝트 9.4.1 Coil Demo (인터넷 권한 필요)

```kotlin
// build.gradle.kts
dependencies {
    implementation("io.coil-kt.coil3:coil-compose:3.1.0")
    implementation("io.coil-kt.coil3:coil-network-okhttp:3.1.0")
}
```

```kotlin
val URL = "https://ks0x00.github.io/fractal/images/M_230901_204815.png"

@Composable
fun CoilDemoApp(modifier: Modifier = Modifier) {
    val context = LocalContext.current
    Card(modifier) {
        AsyncImage(
            model = ImageRequest.Builder(context)
                .data(URL)
                .build(),
            contentDescription = ""
        )
    }
}
```

- **`AsyncImage`**: 그림을 비동기로 내려받아 출력합니다. 그림을 어디서 가져오는지만 다르고 사용법은 `Image`와 거의 같습니다.
- 간단히 `AsyncImage(model = URL, contentDescription = "")`처럼 주소만 넘겨도 됩니다. U08의 Photo Picker에서는 URI를 넘겼습니다.
- `coil-network-okhttp`가 있어야 네트워크 주소의 그림을 받을 수 있습니다.

### 종합 — 프랙탈 그림 갤러리

프로젝트 9.4.2 Fractal Demo: `list.json`을 Retrofit으로 받고, 그림은 Coil로 LazyVerticalGrid에 표시합니다. (의존성은 9.3.2 + Coil, 인터넷 권한 필요)

```kotlin
// app/.../data/FractalImage.kt
@Serializable
data class FractalImage(
    @SerialName(value = "img_src")   // JSON 키
    val imgSrc: String,              // 필드 (낙타 표기법)
    val signature: String
)

// app/.../network/NetworkService.kt — 9.3.2와 같음

// app/.../ui/AppViewModel.kt
sealed interface UiState {
    data object Loading : UiState
    data class Success(val images: List<FractalImage>) : UiState
    data object Error : UiState
}

class AppViewModel : ViewModel() {
    var uiState: UiState by mutableStateOf(UiState.Loading)
        private set

    init {
        downloadImages()
    }

    fun downloadImages() {
        uiState = UiState.Loading
        viewModelScope.launch {
            uiState = try {
                UiState.Success(NetworkApi.networkService.getImages())
            } catch (e: IOException) {
                UiState.Error
            } catch (e: HttpException) {
                UiState.Error
            }
        }
    }
}

// app/.../ui/Screen.kt
@Composable
fun Screen(uiState: UiState, modifier: Modifier = Modifier) {
    when (uiState) {
        is UiState.Loading -> LoadingScreen(modifier)
        is UiState.Error -> ErrorScreen(modifier)
        is UiState.Success -> ResultScreen(uiState.images, modifier)
    }
}

@Composable
fun FractalCard(image: FractalImage, modifier: Modifier = Modifier) {
    Card(modifier) {
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            AsyncImage(
                model = ImageRequest.Builder(context = LocalContext.current)
                    .data(image.imgSrc)
                    .build(),
                contentDescription = "",
                modifier = Modifier.fillMaxSize()
            )
        }
    }
}

@Composable
fun ResultScreen(images: List<FractalImage>, modifier: Modifier) {
    LazyVerticalGrid(columns = GridCells.Fixed(2), modifier = modifier) {
        items(items = images) { image ->
            FractalCard(image, modifier = Modifier.padding(4.dp).aspectRatio(1.0f))
        }
    }
}

@Composable
fun LoadingScreen(modifier: Modifier) {
    Text("Loading", modifier)
}

@Composable
fun ErrorScreen(modifier: Modifier) {
    Text("Error", modifier)
}

// MainActivity.kt (setContent 안)
Scaffold { innerPadding ->
    val viewModel: AppViewModel = viewModel()
    Screen(viewModel.uiState, Modifier.padding(innerPadding).fillMaxSize())
}
```

- **`@SerialName("img_src")`**: JSON 키(`img_src`)와 **이름이 다른 필드**(`imgSrc`)를 연결합니다. Kotlin은 필드 이름을 **낙타 표기법**(camelCase)으로 쓰기를 권장합니다.
- `Screen`은 `when(uiState)`로 상태마다 **다른 화면**을 그립니다. 앞에서 본 네트워크 상태 흐름을 그대로 코드로 옮긴 것입니다.
- `Modifier.aspectRatio(1.0f)`: 가로세로 비율 1:1(정사각형)
- 앞에서 배운 내용(ViewModel·sealed 상태·Retrofit·Coil·LazyVerticalGrid)을 모두 합친 프로젝트입니다.

### 교재 연습문제 풀이

**9.2.1** 파일을 통째로 읽어 출력하시오.

<details><summary>정답 보기</summary>

```kotlin
suspend fun readText(): String {
    val connection = URL(FILE_URL).openConnection()
    connection.connect()
    return connection.getInputStream().reader(Charsets.UTF_8).use { it.readText() }
}
// 호출: fileContents = withContext(Dispatchers.IO) { readText() }
```

</details>

**9.2.3** 그림을 원래 크기의 1/2로 표시하시오.

<details><summary>정답 보기</summary>

```kotlin
val widthDp = with(density) { (width / 2).toDp() }
val heightDp = with(density) { (height / 2).toDp() }
```

</details>

**9.3.1** 비행기 모드에서 실행하면?

<details><summary>정답 보기</summary>

연결이 안 되어 `getContents()`가 IOException을 던집니다. 그래서 화면에 **"IOException"**이 표시됩니다.

</details>

**9.3.2** init 대신 버튼으로 내려받고, 한 번 받았으면 다시 받지 않게 하시오.

<details><summary>정답 보기</summary>

```kotlin
// AppViewModel: init 블록 삭제
fun downloadContents() {
    if (contents.isNotEmpty()) return       // 이미 받았으면 끝
    viewModelScope.launch {
        contents = try { NetworkApi.networkService.getContents() } catch (e: IOException) { "IOException" }
    }
}
// 화면
Button(onClick = { viewModel.downloadContents() }) { Text("Download") }
```

</details>

**9.3.4 / 9.3.5** 첫째 객체의 signature를 출력하고, [Reset] 버튼을 추가하시오.

<details><summary>정답 보기</summary>

```kotlin
is UiState.Success -> uiState.images.first().signature

// AppViewModel
fun reset() { uiState = UiState.Start }
// 화면
Button(onClick = { viewModel.reset() }) { Text("Reset") }
```

</details>

### 시험 대비: 빈칸 채우기

```xml
<uses-permission android:name="android.permission.【①】"/>
```

```kotlin
scope.launch {
    val lines = withContext(Dispatchers.【②】) {     // 메인 쓰레드 금지
        readLines()
    }
    fileContents = lines.joinToString("\n")
}

val retrofit: Retrofit = Retrofit.【③】()
    .addConverterFactory(ScalarsConverterFactory.create())
    .【④】(BASE_URL)
    .build()

interface NetworkService {
    @【⑤】(END_POINT)
    【⑥】 fun getContents(): String
}

object NetworkApi {
    val networkService: NetworkService by 【⑦】 {
        retrofit.【⑧】(NetworkService::class.java)
    }
}
```

<details><summary>정답 보기</summary>

① `INTERNET` ② `IO` ③ `Builder` ④ `baseUrl` ⑤ `GET` ⑥ `suspend` ⑦ `lazy` ⑧ `create`

</details>

```kotlin
@【①】
data class FractalImage(
    @【②】(value = "img_src") val imgSrc: String,
    val signature: String
)

【③】 interface UiState {
    data object Loading : UiState
    data class Success(val images: List<FractalImage>) : UiState
    data object Error : UiState
}

when (uiState) {
    【④】 UiState.Success -> ResultScreen(uiState.images, modifier)
    // ⋮
}

【⑤】(model = image.imgSrc, contentDescription = "")   // Coil
```

<details><summary>정답 보기</summary>

① `Serializable` ② `SerialName` ③ `sealed` ④ `is` ⑤ `AsyncImage`

</details>

### 핵심 정리

- 클라이언트가 요청하고 서버가 응답합니다(HTTP). GET은 요청, POST는 보내기. REST API는 보통 JSON으로 응답합니다.
- 메인 쓰레드에서 네트워크 작업을 하면 `NetworkOnMainThreadException`이 납니다. **`withContext(Dispatchers.IO)`**에서 실행합니다.
- 매니페스트에 **`INTERNET` 권한**이 필요합니다.
- 직접 받기: `URL().openConnection()` → `inputStream` → `reader().readLines()` / `BitmapFactory.decodeStream()`
- Retrofit: `Builder().addConverterFactory().baseUrl().build()` + `interface { @GET suspend fun }` + `create()`. 문자열은 Scalars, JSON은 kotlinx-serialization 변환기
- 상태: `sealed interface UiState { Loading / Success(data) / Error }` + `when (uiState) { is … }`
- Coil: `AsyncImage(model = URL)` (`coil-compose` + `coil-network-okhttp`)

---

# U10. 애플리케이션 구성 요소

### 오늘의 목표

- 안드로이드 앱의 네 가지 구성 요소와 인텐트의 역할을 말할 수 있다.
- 액티비티의 매니페스트 등록과 생명 주기 함수의 호출 시점을 설명할 수 있다.
- 명시적 인텐트로 다른 액티비티를 열고 `putExtra`/`getStringExtra`로 자료를 주고받을 수 있다.
- 암시적 인텐트의 액션·범주·마임 형식과 인텐트 필터를 설명할 수 있다.
- Application 클래스를 바꾸는 방법을 말할 수 있다.
- 서비스(`onStartCommand`, `START_STICKY` 등)와 포그라운드 서비스(알림)를 만들 수 있다.
- 브로드캐스트 수신자와 콘텐츠 리졸버의 개념을 설명할 수 있다.

### 네 가지 구성 요소

앱은 **애플리케이션 구성 요소**라는 기본 단위로 이루어집니다. 각 구성 요소는 시스템이나 사용자가 앱에 들어오는 **진입점**이고, 생성과 소멸 방식이 정해진 **수명 주기(lifecycle)**가 있습니다.

| 구성 요소 | 역할 |
|---|---|
| **액티비티(Activity)** | **하나의 화면**. UI 표시 + 사용자 상호작용 |
| **서비스(Service)** | UI 없이 **백그라운드**에서 오래 걸리는 작업 |
| **브로드캐스트 수신자(BroadcastReceiver)** | 시스템·다른 앱이 보내는 **이벤트 알림**을 받음 |
| **콘텐츠 제공자(ContentProvider)** | 앱 사이 **자료 공유** (연락처·사진 등) |

**인텐트(Intent)**는 구성 요소가 아니라, 구성 요소들을 **연결하는 도구(메시지)**입니다.

### 액티비티

- 앱의 출발점이고, `Activity` 클래스의 인스턴스입니다. 앱을 실행하면 **액티비티가 가장 먼저** 만들어집니다.
- 보통 `onCreate()`에서 초기 화면을 구성합니다. Compose에서는 `setContent { }`를 씁니다.

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Text("Hello, Compose!")
        }
    }
}
```

- `ComponentActivity`는 Activity의 파생 클래스로, **Compose와 안드로이드를 연결**하는 중요한 역할을 합니다.
- 모든 액티비티는 **`AndroidManifest.xml`에 등록**해야 합니다.

```xml
<activity
    android:name=".MainActivity"
    android:exported="true"
    android:label="@string/app_name"
    android:theme="@style/Theme.MyApplication">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>
```

| 속성 | 뜻 |
|---|---|
| `android:name` | 액티비티 클래스 |
| `android:exported="true"` | 다른 앱(런처 등)이 이 액티비티를 실행할 수 있음 |
| `android:theme` | 테마 (`res/values/themes.xml`에 정의) |
| `MAIN` + `LAUNCHER` | **앱의 첫 화면**이고, 런처(앱 목록)에 아이콘으로 표시 |

### 액티비티 생명 주기

화면 회전, 홈 버튼, 전화 수신 같은 상황마다 액티비티는 정해진 순서로 생명 주기 함수를 호출합니다. [S33]

| 함수 | 호출 시점 |
|---|---|
| **`onCreate()`** | 처음 **만들어질 때** |
| **`onStart()`** | 화면이 사용자에게 **보이기 시작할 때** |
| `onRestart()` | onStop() 뒤, 화면이 **다시 보이기 직전** |
| **`onResume()`** | 사용자와 **상호작용할 수 있을 때** |
| **`onPause()`** | 다른 액티비티 화면이 **나타나기 직전** |
| **`onStop()`** | 화면이 **완전히 가려졌을 때** |
| **`onDestroy()`** | 액티비티가 **종료될 때** |

```text
onCreate → onStart → onResume → (실행 중) → onPause → onStop → onDestroy
                ↑                                        │
                └──────────── onRestart ←────────────────┘
```

프로젝트 10.1.1 Activity Lifecycle Demo

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.d("MainActivity", "onCreate")
    }
    override fun onStart() {
        super.onStart()
        Log.d("MainActivity", "onStart")
    }
    override fun onStop() {
        super.onStop()
        Log.d("MainActivity", "onStop")
    }
}
```

- Compose에서 생명 주기 함수를 직접 쓸 일은 많지 않습니다. 하지만 **ViewModel이나 상태 유지**를 이해하려면 알아야 합니다. 예를 들어 화면을 회전하면 액티비티가 **onDestroy → onCreate**로 다시 만들어지는데, ViewModel은 이때도 살아남습니다.

### 인텐트

**인텐트**는 앱 안의 다른 구성 요소를 실행하거나, 웹 브라우저·전화 같은 외부 앱을 실행할 때 씁니다. 안드로이드 운영체제나 구성 요소에 **수행할 작업을 알려 주는 메시지**입니다. 작업을 요청하고 자료를 전달합니다. [S34]

| 종류 | 대상 지정 방법 | 주 용도 |
|---|---|---|
| **명시적 인텐트(explicit)** | **클래스 이름**(또는 패키지 이름)을 직접 지정 | **앱 내부** 이동 |
| **암시적 인텐트(implicit)** | **액션과 자료**(기능)로 지정 → 인텐트 필터로 실행할 앱 결정 | 전화 걸기, 웹 페이지 열기 같은 **외부 기능** |

| Intent 멤버 | 뜻 |
|---|---|
| `Intent(context, 클래스::class.java)` | **명시적** 인텐트 |
| `Intent(action)` / `Intent(action, uri)` | **암시적** 인텐트 |
| `putExtra(이름, 값)` | 자료 저장 |
| `getStringExtra(이름)` / `getIntExtra(이름, 기본값)` | 자료 꺼내기 (저장할 때의 이름 사용) |

### 명시적 인텐트 — 다른 액티비티 열기

프로젝트 10.2.1 Intent Demo

```kotlin
// app/.../AnotherActivity.kt
class AnotherActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            val data = intent.getStringExtra("MESSAGE") ?: "No Message"
            Text(text = data, modifier = Modifier.statusBarsPadding())
        }
    }
}

// app/.../MainActivity.kt
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            IntentDemoTheme {
                Button(
                    onClick = {
                        Intent(this, AnotherActivity::class.java).apply {
                            putExtra("MESSAGE", "Hello from MainActivity")
                            startActivity(this)
                        }
                    },
                    modifier = Modifier.statusBarsPadding()
                ) {
                    Text("Another Activity")
                }
            }
        }
    }
}
```

```xml
<!-- AndroidManifest.xml -->
    </activity>
    <!-- 액티비티 등록 -->
    <activity android:name=".AnotherActivity" />
</application>
```

- 보내는 쪽과 받는 쪽이 **같은 이름 `"MESSAGE"`**를 써야 자료를 주고받을 수 있습니다.
- `intent`는 이 액티비티를 실행한 인텐트입니다(Activity의 프로퍼티). 값이 없으면 `?:`로 기본 문자열을 씁니다.
- `apply { … startActivity(this) }`: apply 블록 안의 `this`는 **Intent 객체**입니다.
- 같은 앱의 액티비티는 매니페스트에 **이름만** 등록하면 됩니다.

### 암시적 인텐트 — 액션·범주·마임 형식

남이 만든 앱(예: 음악 재생 앱)의 클래스 이름은 알 수 없습니다. 대신 시스템은 각 구성 요소의 **기능과 받는 자료 형식**을 알고 있습니다. 이 정보로 구성 요소를 고르는 것이 **암시적 인텐트**입니다.

| 기준 | 뜻 | 예 |
|---|---|---|
| **액션(action)** | 어떤 동작을 할지 | `ACTION_CALL`(즉시 전화), `ACTION_DIAL`(다이얼 화면), `ACTION_MAIN`(앱 시작), `ACTION_PICK`(목록에서 선택), **`ACTION_SEND`**(공유), **`ACTION_VIEW`**(열어 보기) |
| **범주(category)** | 처리할 수 있는 액티비티의 유형 | **`CATEGORY_DEFAULT`**(startActivity로 부를 때 **반드시 포함**), `CATEGORY_BROWSABLE`(외부 링크), `CATEGORY_LAUNCHER`(첫 화면), `CATEGORY_HOME`(홈 화면) |
| **마임 형식(MIME type)** | 자료의 형식 | `"text/plain"`(일반 문자열), `"image/jpeg"`(JPEG 그림) |

웹 페이지 열기:

```kotlin
val uri = Uri.parse("https://developer.android.com")
val intent = Intent(Intent.ACTION_VIEW, uri)    // 액션 + 자료 → 암시적
startActivity(intent)
```

조건을 만족하는 액티비티가 **여럿이면 사용자가 고릅니다**(예: 그림 공유 시 앱 목록).

### 인텐트 필터 — 요청에 응답하는 액티비티

암시적 인텐트에 응답할 **조건**을 **인텐트 필터(intent filter)**라 합니다. 매니페스트에 액션·범주·마임 형식을 적습니다.

외부와 자료를 주고받을 때 쓰는 **약속된 이름**(Intent 상수):

| 상수 | 자료 |
|---|---|
| `EXTRA_EMAIL` | 이메일 주소 |
| `EXTRA_PHONE_NUMBER` | 전화번호 |
| `EXTRA_STREAM` | 자료 스트림(그림 파일 등) |
| **`EXTRA_TEXT`** | 문자열 |

프로젝트 10.2.2 Intent Filter Demo: 문자열 공유를 받는 액티비티를 만듭니다.

```kotlin
// app/.../ActionSendActivity.kt
class ActionSendActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            val data = intent.getStringExtra(Intent.EXTRA_TEXT) ?: "No Message"
            Text(text = data, modifier = Modifier.statusBarsPadding())
        }
    }
}

// app/.../MainActivity.kt (setContent 안)
IntentFilterDemoTheme {
    Button(
        onClick = {
            val intent = Intent(Intent.ACTION_SEND)
            intent.type = "text/plain"
            intent.putExtra(Intent.EXTRA_TEXT, "Hello")
            startActivity(intent)
        },
        modifier = Modifier.statusBarsPadding()
    ) { Text("Send Message") }
}
```

```xml
<!-- AndroidManifest.xml -->
<activity
    android:name=".ActionSendActivity"
    android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.SEND"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <data android:mimeType="text/plain"/>
    </intent-filter>
</activity>
```

- 이 액티비티는 **"문자열을 보내는(SEND) 인텐트"**에 응답합니다. 다른 앱에서 텍스트를 공유할 때도 목록에 나타납니다.
- 외부에서 부를 수 있어야 하므로 **`android:exported="true"`**입니다.
- `startActivity(Intent.createChooser(intent, "Title"))`로 바꾸면, 응답할 앱이 하나여도 **선택 창이 항상** 뜹니다(연습문제 10.2.3).

### Application

- 앱을 실행하면 **가장 먼저 `Application` 인스턴스**가 만들어집니다. 앱 전체에 **하나만** 있으며, 전역 설정이나 공통 자료(전역 테마, 공통 ViewModel, 상태 저장소 초기화 등) 관리에 씁니다.
- 바꾸려면 파생 클래스를 만들고 매니페스트에 등록합니다(U08의 InventoryApplication).

```kotlin
class MyApplication : Application() { /* ⋮ */ }
```

```xml
<application
    android:name=".MyApplication"
    ⋯ >
```

### 서비스

**서비스(Service)**는 시간이 오래 걸리는 작업을 **백그라운드**에서 실행하는 구성 요소입니다. **UI가 없고**, 사용자가 다른 앱으로 넘어가도 계속 실행될 수 있습니다(네트워크 작업, 음악 재생, 파일 입출력). [S35]

| Service 멤버 | 뜻 |
|---|---|
| `onCreate()` | 서비스가 생성될 때 |
| **`onStartCommand(intent, flags, startId)`** | 서비스가 **시작될 때** |
| `onDestroy()` | 서비스가 제거될 때 |
| `onBind(intent)` | 상호작용 채널(IBinder) 반환. 쓰지 않으면 `null` |
| `stopSelf()` | 서비스 **스스로 종료** |

`onStartCommand()`의 반환값

| 값 | 시스템이 서비스를 강제 종료했을 때 |
|---|---|
| **`START_STICKY`** | 시스템이 **자동으로 다시 시작** |
| **`START_NOT_STICKY`** | 다시 시작하지 **않음** |
| `START_REDELIVER_INTENT` | 다시 시작하면서 **마지막 인텐트를 다시 전달** |

### 서비스로 파일 다운로드

서비스는 기본적으로 **메인 쓰레드**에서 실행됩니다. 오래 걸리는 작업은 앱을 멈춘 것처럼 보이게 하므로 **별도 쓰레드**에서 돌리기를 권장합니다. 여기서는 IO 쓰레드의 코루틴을 씁니다.

프로젝트 10.4.1 Download Service Demo

```kotlin
// app/.../DownloadService.kt
class DownloadService : Service() {
    companion object {
        const val DOWNLOAD_URL = "https://ks0x00.github.io/fractal/index.html"
        const val FILE_NAME = "dummy.html"
    }

    // 서비스 생명 주기와 연결된 CoroutineScope 생성
    private val serviceScope = CoroutineScope(Dispatchers.IO + SupervisorJob())

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        serviceScope.launch {
            try {
                val url = URL(DOWNLOAD_URL)
                val connection = url.openConnection()
                connection.connect()
                val file = File(filesDir, FILE_NAME)
                FileOutputStream(file).use { output ->
                    connection.getInputStream().use { input ->
                        input.copyTo(output)
                    }
                }
            } catch (e: Exception) {
                e.printStackTrace()
            } finally {
                stopSelf()                   // 서비스 종료
            }
        }
        return START_NOT_STICKY
    }

    override fun onDestroy() {
        super.onDestroy()
        serviceScope.cancel()                // CoroutineScope 취소
    }

    override fun onBind(intent: Intent?): IBinder? = null
}

// MainActivity.kt
@Composable
fun DownloadScreenDemoApp(modifier: Modifier = Modifier) {
    val context = LocalContext.current
    var content by remember { mutableStateOf("") }
    Column(modifier = modifier) {
        Row {
            Button(onClick = {
                val downloadIntent = Intent(context, DownloadService::class.java)
                context.startService(downloadIntent)
            }) { Text(text = "Download") }
            Button(onClick = {
                val file = File(context.filesDir, DownloadService.FILE_NAME)
                try {
                    content = file.readText()
                } catch (e: Exception) {
                    e.printStackTrace()
                    content = "파일 읽기 실패"
                }
            }) { Text(text = "Show") }
        }
        Text(text = content)
    }
}
```

```xml
<!-- AndroidManifest.xml -->
<uses-permission android:name="android.permission.INTERNET"/>   <!-- 인터넷 사용 허가 -->
<application ⋯ >
    ⋯
    </activity>
    <!-- 서비스 등록 -->
    <service
        android:name=".DownloadService"
        android:enabled="true"/>
</application>
```

| 코드 | 뜻 |
|---|---|
| `CoroutineScope(Dispatchers.IO + SupervisorJob())` | 서비스 전용 코루틴 범위 (IO 쓰레드, 자식 하나가 실패해도 다른 자식은 유지) |
| `input.copyTo(output)` | 입력 스트림 내용을 출력 스트림(파일)으로 복사 |
| `finally { stopSelf() }` | 성공하든 실패하든 **작업이 끝나면 서비스 종료** |
| `serviceScope.cancel()` | 서비스가 없어질 때 코루틴도 정리 |
| `context.startService(intent)` | **명시적 인텐트**로 서비스 시작 (`stopService`로 중지) |
| `<service android:name=…>` | 서비스도 매니페스트에 **등록** 필수 |

[교육용 설명] 교재 코드는 `launch { … }` 뒤에 `.start()`를 붙였습니다. `launch`는 이미 시작된 Job을 돌려주므로 `.start()`는 없어도 결과가 같습니다.

### 포그라운드 서비스와 알림

**포그라운드 서비스(foreground service)**는 **알림이 표시되는** 서비스입니다. 음악 재생이나 다운로드 중에 상태 표시줄에 아이콘으로 알립니다.

프로젝트 10.4.2 Notification Demo: 음악 파일은 `res/raw/music.wav`, 알림 아이콘은 `res/drawable/ic_music.png`에 둡니다.

```kotlin
// app/.../MusicService.kt
class MusicService : Service() {
    private lateinit var mediaPlayer: MediaPlayer

    override fun onCreate() {
        super.onCreate()
        mediaPlayer = MediaPlayer.create(this, R.raw.music)    // 음악 파일
        mediaPlayer.setOnCompletionListener {
            stopSelf()                                         // 음악이 끝나면 서비스 종료
        }
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        startForeground(NOTIFICATION_ID, createNotification()) // 알림 표시
        mediaPlayer.start()                                    // 음악 재생
        return START_STICKY
    }

    override fun onDestroy() {
        super.onDestroy()
        mediaPlayer.stop()                                     // MediaPlayer 해제
        mediaPlayer.release()
    }

    override fun onBind(intent: Intent?): IBinder? = null

    private fun createNotification() = NotificationCompat
        .Builder(this, CHANNEL_ID)
        .setContentTitle("음악 재생")
        .setContentText("Electric Guitar Mood 6 재생 중")
        .setSmallIcon(R.drawable.ic_music)                     // 알림 아이콘
        .setPriority(NotificationCompat.PRIORITY_DEFAULT)
        .build()

    companion object {
        const val NOTIFICATION_ID = 1
        const val CHANNEL_ID = "MusicServiceChannel"

        fun createNotificationChannel(notificationManager: NotificationManager) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                val name = "Music Service Channel"
                val descriptionText = "Channel for Music Service notifications"
                val importance = NotificationManager.IMPORTANCE_DEFAULT
                val channel = NotificationChannel(CHANNEL_ID, name, importance)
                channel.description = descriptionText
                notificationManager.createNotificationChannel(channel)
            }
        }
    }
}

// MainActivity.kt (onCreate 안)
enableEdgeToEdge()
MusicService.createNotificationChannel(
    getSystemService(NOTIFICATION_SERVICE) as NotificationManager
)
setContent {
    NotificationDemoTheme {
        Column(modifier = Modifier.statusBarsPadding()) {
            val musicIntent = Intent(this@MainActivity, MusicService::class.java)
            Button(onClick = { startService(musicIntent) }) { Text("Start Music") }
            Button(onClick = { stopService(musicIntent) }) { Text("Stop Music") }
        }
    }
}
```

```xml
<!-- AndroidManifest.xml -->
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<!-- Android 14 (API 34) 이상에서 필요 -->
<uses-permission android:name="android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK" />
<!-- Android 13 (API 33) 이상에서 필요 -->
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
<application ⋯ >
    ⋯
    <service
        android:name=".MusicService"
        android:enabled="true"
        android:foregroundServiceType="mediaPlayback" />
</application>
```

| 핵심 | 설명 |
|---|---|
| **알림 채널** | 알림을 띄우기 전에 **한 번만** 만들면 계속 사용 (Android 8, O 이상) |
| `startForeground(ID, 알림)` | 서비스를 포그라운드로 만들고 알림 표시. 실행될 때마다 필요하므로 **onStartCommand**에 둠 |
| `NotificationCompat.Builder` | 제목·내용·아이콘·우선순위로 알림 생성 |
| `MediaPlayer.create(this, R.raw.music)` | `res/raw`의 음악으로 플레이어 생성 → `start()` / `stop()` / `release()` |
| `this@MainActivity` | 람다 안에서 **바깥 MainActivity 객체**를 가리키는 레이블 this |
| 권한 3개 | `FOREGROUND_SERVICE`, `FOREGROUND_SERVICE_MEDIA_PLAYBACK`(API 34+), `POST_NOTIFICATIONS`(API 33+) |

- 실행 후 **설정 > 애플리케이션 > Notification Demo > 알림**에서 알림을 허용해야 보입니다.
- 반복 재생하려면 `mediaPlayer.isLooping = true`를 씁니다(연습문제).

### 브로드캐스트 수신자와 콘텐츠 리졸버

**브로드캐스트 수신자(BroadcastReceiver)**

- 앱은 시스템이나 다른 앱과 **브로드캐스트 메시지**를 주고받습니다. 이 메시지는 **특정 이벤트가 일어났음**을 알립니다. 예: 배터리 잔량 부족
- 이 메시지를 받도록 등록된 컴포넌트가 브로드캐스트 수신자입니다. 앱이 직접 브로드캐스트를 보낼 수도 있습니다. (자세한 처리는 교재 범위 밖)

**콘텐츠 제공자와 콘텐츠 리졸버**

- **콘텐츠 제공자(ContentProvider)**: 앱 사이 자료 공유와 시스템 자료(연락처·사진·오디오·비디오) 접근을 위한 메커니즘입니다.
- **콘텐츠 리졸버(ContentResolver)**: 앱이 콘텐츠 제공자에 접근할 때 쓰는 도구로, 통신을 **중개**합니다. 먼저 자료의 **URI**를 알아야 합니다. 예: 연락처는 `ContactsContract.Contacts.CONTENT_URI`

| ContentResolver 메서드 | 기능 |
|---|---|
| `query(uri, projection, selection, selectionArgs, sortOrder)` | **조회** → Cursor |
| `insert(uri, values)` | **추가** |
| `update(uri, values, where, selectionArgs)` | **수정** |
| `delete(uri, where, selectionArgs)` | **삭제** |
| `getType(uri)` | MIME 형식 반환 |

- 실제 사용 예는 U08의 MediaStore 저장(`contentResolver.insert/update/delete`)입니다.

### 교재 연습문제 풀이

**10.1.2** 모든 생명 주기 함수에 로그를 넣고, 홈 버튼을 눌렀다가 다시 돌아오면 어떤 순서로 찍히는가?

<details><summary>정답 보기</summary>

시작: `onCreate → onStart → onResume`
홈 버튼: `onPause → onStop`
다시 돌아옴: `onRestart → onStart → onResume`
뒤로 가기로 종료: `onPause → onStop → onDestroy`

</details>

**10.2.1** 정수를 받아 출력하는 액티비티를 추가하시오.

<details><summary>정답 보기</summary>

```kotlin
class NumberActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val n = intent.getIntExtra("NUMBER", 0)
            Text("$n", Modifier.statusBarsPadding())
        }
    }
}
// 보내기
Intent(this, NumberActivity::class.java).apply {
    putExtra("NUMBER", 42)
    startActivity(this)
}
// 매니페스트: <activity android:name=".NumberActivity" />
```

</details>

**10.2.3** `startActivity(Intent.createChooser(intent, "Title"))`로 바꾸면?

<details><summary>정답 보기</summary>

응답할 앱이 하나뿐이어도 **"Title" 제목의 선택 창이 매번** 뜹니다. 기본 앱으로 정해 두는 옵션도 나타나지 않습니다.

</details>

**10.4.3** 음악이 반복 재생되게 하시오.

<details><summary>정답 보기</summary>

`onCreate()`에서 `mediaPlayer.isLooping = true`로 설정합니다(반복 중에는 완료 리스너가 호출되지 않음).

</details>

### 시험 대비: 빈칸 채우기

```kotlin
// 명시적 인텐트
Intent(this, AnotherActivity::class.java).apply {
    【①】("MESSAGE", "Hello from MainActivity")
    【②】(this)
}
// 받는 쪽
val data = intent.【③】("MESSAGE") ?: "No Message"

// 암시적 인텐트 — 웹 페이지 열기
val intent = Intent(Intent.【④】, Uri.parse("https://developer.android.com"))
```

<details><summary>정답 보기</summary>

① `putExtra` ② `startActivity` ③ `getStringExtra` ④ `ACTION_VIEW`

</details>

```xml
<activity android:name=".ActionSendActivity" android:exported="true">
    <【①】>
        <action android:name="android.intent.action.【②】"/>
        <category android:name="android.intent.category.【③】"/>
        <data android:【④】="text/plain"/>
    </【①】>
</activity>
```

<details><summary>정답 보기</summary>

① `intent-filter` ② `SEND` ③ `DEFAULT` ④ `mimeType`

</details>

```kotlin
class DownloadService : 【①】() {
    override fun 【②】(intent: Intent?, flags: Int, startId: Int): Int {
        // ⋮ 작업 후
        【③】()                                  // 스스로 종료
        return 【④】                             // 강제 종료되면 다시 시작하지 않음
    }
    override fun onBind(intent: Intent?): IBinder? = 【⑤】
}
context.【⑥】(Intent(context, DownloadService::class.java))
```

<details><summary>정답 보기</summary>

① `Service` ② `onStartCommand` ③ `stopSelf` ④ `START_NOT_STICKY` ⑤ `null` ⑥ `startService`

</details>

### 핵심 정리

- 구성 요소 4가지: **액티비티(화면)·서비스(백그라운드)·브로드캐스트 수신자(이벤트)·콘텐츠 제공자(공유)**, 연결 도구는 **인텐트**
- 액티비티는 매니페스트에 등록합니다. 첫 화면은 `MAIN` + `LAUNCHER`
- 생명 주기: `onCreate → onStart → onResume → onPause → onStop → onDestroy` (+ `onRestart`)
- 명시적 인텐트 = 클래스 지정(앱 내부), 암시적 인텐트 = 액션·자료 지정(외부 기능). 응답 조건은 **인텐트 필터**(action·category·data mimeType)
- 자료: `putExtra` / `getStringExtra`, 약속된 이름은 `EXTRA_TEXT` 등
- 서비스: `onStartCommand` + `START_STICKY / NOT_STICKY / REDELIVER_INTENT`, 끝나면 `stopSelf()`, 매니페스트에 `<service>` 등록
- 포그라운드 서비스: 알림 채널 + `startForeground()` + 권한
- 콘텐츠 리졸버: URI로 `query / insert / update / delete`

---

# 용어 사전

| 용어 | 가장 쉬운 풀이 | 처음 배울 곳 |
|---|---|---|
| Jetpack Compose | 안드로이드 UI를 함수로 선언하는 도구 모음 | U00 |
| 선언형 UI | "화면이 이렇게 생겼다"를 적으면 상태에 따라 화면이 알아서 바뀌는 방식 | U00 |
| AVD | 안드로이드 가상 기기(Android Virtual Device) | U00 |
| setContent | 액티비티 화면을 채울 내용을 지정하는 함수 | U00 |
| 컴포저블 | `@Composable`이 붙은, UI를 정의하는 함수 | U01 |
| 주석(annotation) | `@이름` 형태로 코드에 붙이는 추가 정보 (`@Composable`, `@Preview`) | U01 |
| 컴포지션 | 컴포저블을 처음 구성해 UI 트리를 만드는 것 | U01 |
| 상태(state) | 시간이 지나며 바뀌는 값. 바뀌면 그 값을 쓰는 UI가 다시 그려짐 | U01 |
| 리컴포지션 | 바뀐 상태를 반영해 컴포저블을 다시 구성하는 것 | U01 |
| 슬롯(slot) | 컴포저블을 대입하는 매개 변수 (`content: @Composable () -> Unit`) | U01 |
| 후행 람다 | 마지막 매개 변수인 함수를 괄호 밖 `{ }`로 쓰는 문법 | U01 |
| it | 매개 변수가 하나인 람다에서 그 매개 변수 | U01 |
| sp | 사용자 글꼴 설정을 따르는 글꼴 크기 단위 | U01 |
| dp | 화면 밀도와 무관하게 같은 크기로 보이는 길이 단위 | U01 |
| Modifier(수정자) | 크기·여백·배경 등 컴포저블을 꾸미는 체인. 순서가 중요 | U01 |
| 리소스 | `res/`에 따로 두는 그림·문자열·색·길이 | U01 |
| Logcat | `Log.d()` 같은 로그를 보는 Android Studio 창 | U01 |
| Toast | 화면에 잠깐 떴다 사라지는 메시지 | U01 |
| 레이아웃 | 배치 형식이 정해진 컨테이너 (Column·Row·Box) | U02 |
| Arrangement | 요소가 여러 개 늘어선 주 방향의 배치 | U02 |
| Alignment | 한 줄에 하나뿐인 교차 방향의 정렬 | U02 |
| Spacer | 빈 공간을 만드는 컴포저블 | U02 |
| Surface | 색·모양·테두리를 정하는 Material 컨테이너 | U02 |
| Scaffold | 상단 앱 바·하단 앱 바 슬롯이 있는 화면 뼈대 | U02 |
| innerPadding | Scaffold가 넘겨주는, 앱 바·상태 바 높이만큼의 여백 | U02 |
| Card | 카드 모양 Material 컨테이너 (elevation = 그림자) | U02 |
| MaterialTheme | 색(colorScheme)·글꼴(typography)을 관리하는 테마 | U02 |
| 동적 색상 | 시스템이 배경을 감지해 정하는 색 (`dynamicColor`) | U02 |
| AlertDialog | 아이콘·제목·본문·확인/닫기 버튼 구조가 정해진 대화 상자 | U02 |
| onDismissRequest | 대화 상자 바깥을 눌렀을 때 호출되는 함수 | U02 |
| KeyboardType | 입력 칸을 눌렀을 때 뜨는 키보드 종류 (Number, Password …) | U03 |
| ImeAction | 키보드 엔터 자리 버튼 (Next, Done …) | U03 |
| isError | TextField를 오류 모양으로 표시하는 매개 변수 | U03 |
| ContentScale | 그림과 공간 크기가 다를 때 맞추는 방법 (Fit, Crop …) | U03 |
| 벡터 이미지 | 좌표와 수식으로 저장해 확대해도 깨지지 않는 그림 | U03 |
| selectableGroup | 라디오 버튼들을 한 그룹으로 묶는 수정자 | U03 |
| 지연 구성 요소 | 화면에 보이는 항목만 구성하는 목록·그리드 (LazyColumn …) | U04 |
| 데이터 클래스 | 자료를 담는 클래스 (`data class`) | U04 |
| 확장 함수 | 클래스 밖에서 정의한 멤버 함수 (`fun A.f()`) | U04 |
| GridCells.Adaptive | 최소 폭 이상으로 한 행에 최대한 많이 배치 | U04 |
| 스프링 애니메이션 | 탄성(dampingRatio)·강도(stiffness)로 정하는 물리 기반 애니메이션 | U04 |
| Canvas | 문자열·도형·그림을 px 좌표로 직접 그리는 컴포저블 | U05 |
| DrawScope | Canvas 안에서 `draw…()` 함수를 제공하는 범위 | U05 |
| TextMeasurer | 그릴 문자열의 크기와 위치를 재는 객체 | U05 |
| px | 실제 화면 픽셀 단위. Canvas 좌표 단위 | U05 |
| 변환 | translate(이동)·rotate(회전)·scale(확대/축소) | U05 |
| drawBehind | 일반 컴포저블의 배경에 그림을 그리는 수정자 | U05 |
| 프로세스 | 컴퓨터에서 독립적으로 실행되는 단위 (보통 앱 하나) | U05 |
| 쓰레드 | 프로세스 안에서 독립적으로 실행되는 단위 | U05 |
| 코루틴 | 쓰레드 안에서 도는 가벼운 실행 단위. 비동기 작업용 | U05 |
| suspend | 코루틴에서 실행되는(일시 중단할 수 있는) 함수 표시 | U05 |
| LaunchedEffect | 컴포저블 안에서 코루틴 실행. 키가 바뀌면 재시작 | U05 |
| rememberCoroutineScope | onClick 같은 이벤트에서 코루틴을 시작할 범위 | U05 |
| Job | launch()가 돌려주는 작업 객체. `cancel()`로 취소 | U05 |
| remember | 리컴포지션되어도 값을 기억 (회전하면 사라짐) | U06 |
| MutableState | `value`를 관찰하는, 바꿀 수 있는 상태 객체 | U06 |
| by (위임) | 변수의 읽기·쓰기를 다른 객체에 맡기는 Kotlin 키워드 | U06 |
| rememberSaveable | Bundle에 저장해 회전·강제 종료 후에도 복원 | U06 |
| 상태 호이스팅 | 상태를 호출하는 쪽(위)으로 올려 관리하는 것 | U06 |
| 스테이트풀 / 스테이트리스 | 상태를 관리하는 / 관리하지 않는 컴포저블 | U06 |
| ViewModel | UI 자료와 이벤트 처리를 맡는 구성 요소. 회전에도 유지 | U06 |
| StateFlow | 최신 상태를 유지하고 관찰할 수 있는 흐름 (비동기) | U06 |
| collectAsState | StateFlow를 Compose State로 바꿔 구독 | U06 |
| NavController | 화면(대상) 사이 이동을 담당 | U07 |
| NavHost | NavGraph에 화면을 담는 컨테이너 컴포저블 | U07 |
| 백 스택 | 이동한 화면을 차례로 쌓아 둔 스택. [뒤로]는 맨 위를 뺌 | U07 |
| nullable | null도 담을 수 있는 형식 (`Foo?`) | U07 |
| 엘비스 연산자 | `a ?: b` — a가 null이면 b | U07 |
| 내부 저장소 | 다른 앱이 접근할 수 없는 앱 전용 저장 공간 (filesDir) | U08 |
| 공유 저장소 | 사진·음악 등 다른 앱과 공유하는 저장 공간 (MediaStore) | U08 |
| MediaStore | 공유 저장소의 미디어에 접근하는 API | U08 |
| Photo Picker | 사용자가 고른 사진에만 접근 권한을 주는 선택 도구 | U08 |
| Room | SQLite 위의 추상화 레이어 DB 라이브러리 | U08 |
| Entity | Room에서 테이블과 레코드(행)를 나타내는 클래스 | U08 |
| DAO | DB에 자료를 넣고 꺼내는 인터페이스 (데이터 접근 객체) | U08 |
| 쿼리 | DB에 전달하는 명령 (`SELECT …`) | U08 |
| 싱글톤 | 앱 전체에 객체를 하나만 두는 패턴 | U08 |
| WorkManager | 앱이 꺼져도 실행이 보장되는 백그라운드 작업 스케줄러 | U08 |
| CoroutineWorker | doWork()에 비동기 백그라운드 작업을 적는 클래스 | U08 |
| 고유 작업 | 같은 이름의 작업이 한 번에 하나만 실행되게 하는 것 | U08 |
| 클라이언트 / 서버 | 요청을 보내는 쪽 / 자료를 보내 주는 쪽 | U09 |
| HTTP | 웹에서 요청과 응답을 주고받는 규칙 | U09 |
| REST API | HTTP로 자원을 제공하는 웹 서비스 방식. 보통 JSON으로 응답 | U09 |
| JSON | 키-값 쌍으로 된 가벼운 자료 형식 | U09 |
| Dispatchers.IO | 입출력에 최적화된 쓰레드 풀 | U09 |
| Retrofit | REST 서버와 통신하고 JSON을 분석해 주는 라이브러리 | U09 |
| 직렬화 | 자료를 저장·전송할 수 있는 형태로 바꾸는 것 (`@Serializable`) | U09 |
| sealed interface | 하위 형식이 정해진 인터페이스. 상태(Loading/Success/Error) 표현에 씀 | U09 |
| Coil | 웹 그림을 내려받아 표시하는 라이브러리 (AsyncImage) | U09 |
| 액티비티 | 화면 하나를 나타내는 구성 요소 | U10 |
| 생명 주기 | onCreate~onDestroy로 이어지는 생성·소멸 과정 | U10 |
| 인텐트 | 작업을 요청하고 자료를 전달하는 메시지 | U10 |
| 명시적 / 암시적 인텐트 | 클래스를 직접 지정 / 액션·자료로 지정 | U10 |
| 인텐트 필터 | 암시적 인텐트에 응답할 조건 (action·category·mimeType) | U10 |
| MIME 형식 | 자료의 종류 표기 (text/plain, image/jpeg) | U10 |
| Application | 앱 실행 시 가장 먼저 만들어지는 전역 객체 | U10 |
| 서비스 | UI 없이 백그라운드에서 도는 구성 요소 | U10 |
| 포그라운드 서비스 | 상태 표시줄에 알림을 표시하는 서비스 | U10 |
| 브로드캐스트 수신자 | 시스템·다른 앱의 이벤트 알림을 받는 구성 요소 | U10 |
| 콘텐츠 리졸버 | 콘텐츠 제공자의 자료를 조회·추가·수정·삭제하는 도구 | U10 |

---

# 의존성 한눈에 보기

`build.gradle.kts (Module :app)`의 `dependencies { }`에 추가하고 **[Sync Now]**를 누릅니다.

| 기능 | 코드 | 단원 |
|---|---|---|
| 확장 아이콘 | `implementation("androidx.compose.material:material-icons-extended")` | U03 |
| ViewModel | `implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.7")` | U06 |
| Navigation | `implementation("androidx.navigation:navigation-compose:2.8.7")` | U07 |
| Room | `room-runtime:2.6.1`, `ksp("androidx.room:room-compiler:2.6.1")`, `room-ktx:2.6.1` + 플러그인 `com.google.devtools.ksp` | U08 |
| WorkManager | `implementation("androidx.work:work-runtime-ktx:2.10.1")` | U08 |
| Retrofit | `com.squareup.retrofit2:retrofit:2.11.0`, `converter-scalars:2.9.0` | U09 |
| JSON 변환 | `retrofit2-kotlinx-serialization-converter:1.0.0`, `okhttp:4.12.0`, `kotlinx-serialization-json:1.6.0` + 플러그인 `org.jetbrains.kotlin.plugin.serialization` | U09 |
| Coil | `io.coil-kt.coil3:coil-compose:3.1.0`, `coil-network-okhttp:3.1.0` | U08·U09 |

---

# 매니페스트 한눈에 보기

`app/manifests/AndroidManifest.xml`에 적어야 하는 것들입니다.

| 상황 | 적는 것 | 단원 |
|---|---|---|
| 인터넷 사용 | `<uses-permission android:name="android.permission.INTERNET"/>` | U09·U10 |
| Application 파생 클래스 | `<application android:name=".InventoryApplication">` | U08·U10 |
| 액티비티 추가 | `<activity android:name=".AnotherActivity" />` | U10 |
| 공유를 받는 액티비티 | `exported="true"` + `<intent-filter>` (SEND / DEFAULT / text/plain) | U10 |
| 서비스 | `<service android:name=".DownloadService" android:enabled="true"/>` | U10 |
| 포그라운드 서비스 | 권한 `FOREGROUND_SERVICE`, `FOREGROUND_SERVICE_MEDIA_PLAYBACK`, `POST_NOTIFICATIONS` + `foregroundServiceType="mediaPlayback"` | U10 |

---

# 헷갈리는 짝 비교

| 짝 | 차이 |
|---|---|
| sp vs dp | 글꼴 크기 vs 크기·여백 |
| dp vs px | 화면 밀도와 무관한 단위 vs 실제 픽셀(Canvas) |
| Arrangement vs Alignment | 여러 개가 늘어선 주 방향 vs 한 줄에 하나인 교차 방향 |
| `size→padding` vs `padding→size` | 안쪽이 줄어듦 vs 바깥이 커짐 |
| AlertDialog vs Dialog | 구조가 정해짐 vs 내용과 버튼을 직접 구성 |
| Fit vs Crop vs FillBounds | 전체 보이기 vs 꽉 채우고 자르기 vs 비율 무시하고 늘리기 |
| Column vs LazyColumn | 모든 항목 구성 vs 보이는 항목만 구성(스크롤) |
| GridCells.Fixed vs Adaptive | 열 개수 고정 vs 최소 폭 기준으로 열 수가 바뀜 |
| `Stroke` vs `Fill` | 테두리만 vs 채우기 |
| LaunchedEffect vs rememberCoroutineScope | 컴포저블 본문(생명 주기와 함께) vs onClick 같은 이벤트 |
| remember vs rememberSaveable vs ViewModel | 회전하면 사라짐 vs 회전·강제 종료 견딤 vs 회전은 견디고 강제 종료는 못 견딤 |
| 스테이트풀 vs 스테이트리스 | 상태를 관리 vs 받은 값만 그림 |
| MutableStateFlow vs StateFlow | ViewModel 안의 수정 가능한 것(`_uiState`) vs 밖에 공개하는 읽기 전용(`uiState`) |
| `popBackStack(route, false)` vs `true` | 그 화면은 남김 vs 그 화면까지 제거 |
| `?.` vs `?:` | null이면 null vs null이면 오른쪽 값 |
| MODE_PRIVATE vs MODE_APPEND | 새로 쓰기 vs 뒤에 이어 쓰기 |
| Worker vs CoroutineWorker | 동기 vs 비동기(코루틴) |
| OneTimeWorkRequest vs PeriodicWorkRequest | 한 번 vs 주기적 |
| KEEP vs REPLACE | 새 작업 무시 vs 기존 작업 취소하고 대체 |
| Scalars 변환기 vs Json 변환기 | 문자열 그대로 vs JSON → 객체 |
| 명시적 vs 암시적 인텐트 | 클래스 지정(앱 내부) vs 액션·자료 지정(외부 기능) |
| ACTION_CALL vs ACTION_DIAL | 즉시 전화 vs 다이얼 화면만 |
| onPause vs onStop | 다른 화면이 나타나기 직전 vs 완전히 가려짐 |
| START_STICKY vs START_NOT_STICKY | 강제 종료 후 자동 재시작 vs 재시작 안 함 |

---

# 단원별 확인 질문

가림펜으로 오른쪽 답을 가리고 말로 답해 보세요.

| 질문 | 답 |
|---|---|
| 화면을 채우는 함수는? | `setContent { }` |
| 상태를 만드는 기본 코드는? | `var x by remember { mutableStateOf(초깃값) }` |
| TextField에 글자가 안 써지는 흔한 이유는? | `onValueChange`에서 상태를 바꾸지 않음 |
| Box에서 가운데 정렬 값은? | `Alignment.Center` |
| Scaffold의 innerPadding을 쓰는 이유는? | 내용이 앱 바·상태 바에 가려지지 않게 |
| 확장 아이콘을 쓰려면? | `material-icons-extended` 의존성 + Sync Now |
| LazyColumn 안에서 리스트를 펼치는 함수는? | `items(list) { x -> … }` |
| Canvas의 좌표 원점과 단위는? | 왼쪽 위 (0,0), px |
| LaunchedEffect를 한 번만 실행하려면? | 키에 `Unit` |
| 회전해도 입력값을 유지하려면? | `rememberSaveable` |
| ViewModel 상태를 UI에서 구독하는 함수는? | `collectAsState()` |
| 화면 이동 함수와 뒤로 가기 함수는? | `navigate(route)`, `popBackStack()` |
| 문자열을 다른 앱에 공유하는 액션은? | `Intent.ACTION_SEND` + `EXTRA_TEXT` |
| Room의 세 가지 구성은? | `@Entity`, `@Dao`, `@Database` |
| 백그라운드 작업 클래스의 오버라이드 함수는? | `doWork()` |
| 네트워크 작업은 어느 디스패처에서? | `Dispatchers.IO` |
| 인터넷 권한 이름은? | `android.permission.INTERNET` |
| Retrofit에서 요청을 선언하는 주석은? | `@GET(경로)` |
| Coil로 웹 그림을 표시하는 컴포저블은? | `AsyncImage` |
| 액티비티가 처음 만들어질 때 호출되는 함수는? | `onCreate()` |
| 서비스가 시작될 때 호출되는 함수는? | `onStartCommand()` |
