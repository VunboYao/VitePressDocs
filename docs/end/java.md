# java

- JDK = JRE + 开发工具集(例如 javac, java 编译工具等)
- JRE = JVM + Java SE 标准类库 (java 核心类库)

## 数据类型

基本数据类型  

 1. 数值型
    - 整数类型，`byte[1], short[2], int[4], long[8]`
    - 浮点类型，`float[4], double[8]`
 2. 字符型 `char[2]`
 3. 布尔型 `boolean[1]`

引用数据类型

1. 数组
2. 类
3. 接口

## 整数类型

|类型|占用字节数|取值范围|
|:---:|:---:|:---:|
|byte|1|-128~127|
|short|2|-32768~32767|
|int|4|-2147483648~2147483647|
|long|8|-9223372036854775808~9223372036854775807|

:::tip 整型
默认为 int 类型，声明 long 类型，需要添加 L 后缀
:::

:::tip bit
计算机中的最小存储单位，1 byte = 8 bit
:::

## 浮点类型

|类型|占用字节数|取值范围|
|:---:|:---:|:---:|
|float|4|1.4E-45~3.4028235E38|
|double|8|4.9E-324~1.7976931348623157E308|

:::tip 浮点型
默认为 double 类型，声明 float 类型，需要添加 F 后缀
:::

## 字符型

字符类型可以表示单个字符，字符类型是 char, **两个字节(可以存放汉字)**

:::tip
char 的本质是一个整数，输出时，是 unicode 码对应的字符；可以进行运算
:::

## 基本数据类型转换

当 JAVA 程序在进行赋值或者运算时，精度小的类型会自动提升为精度大的类型

- `char -> int -> long -> float -> double`
- `byte -> short -> int -> long -> float -> double`

```java
int a = 'c';
double d = 80;
```

:::tip

1. 有多种类型的数据混合运算时， 系统首先自动将所有数据转换成**容量最大的那种数据类型**，然后再进行运算
2. 把精度大的数据类型赋值给精度小的数据类型，会报错；反之，自动转换
3. `(byte, short)` 和 `char` 之间不能相互转换
4. `byte, short, char` 三者可以计算, 首先转换为`int` 类型，然后再进行运算
5. `boolean` 不参与转换
6. 自动提升原则： 表达式结果的类型自动提升为操作数中最大的类型

:::

## 强制类型转换

将容量大的数据转换为容量小的数据。 使用时需要加上强制转换符`()`，但可能造成**丢失精度**

```java
int a = (int) 1.9;
System.out.println(a); // 1
```

:::tip
`char` 类型可以保存 `int` 的常量值，但不能保存 `int` 变量值，需要强转

```java
char c1 = 100;
int m = 100;
char c2 = m; // cannot convert int to char
char c3 = (char) m;
System.out.println(c3); // d
```

:::

## 基本数据类型和 String 类型转换

- 基本类型转 String 类型： **基本类型的值 + \"\" 即可**

- String 类型转基本数据类型： **使用包装类提供的静态方法 parseXxx()**
  - `Integer.parseInt("123")`
  - `Double.parseDouble("12.3")`
  - `Boolean.parseBoolean("true")`
  - `Float.parseFloat("12.3")`
  - `Byte.parseByte("123")`
  - `Short.parseShort("123")`
  - `Long.parseLong("123")`

:::tip
怎么把字符串转成 **char** 类型呢？
通过 charAt() 方法，传入索引即可

```java
char index2 = "hello".charAt(1);
System.out.println(index2); // e
```

:::

:::warning

1. 在将 String 类型转换成基本数据类型时，**要确保 String 类型能够转成有效的数据**，比如 "123" 可以转成 int 类型，但 "abc" 不能转成 int 类型
2. 如果格式不正确，就会抛出异常，程序终止

:::

## 访问修饰符

|访问级别|访问修饰符|同类|同包|子类|不同包|
|:-----:|:------:|:-:|:-:|:-:|:---:|
|  公开 |  public | ✅| ✅ | ✅ | ✅ |
| 受保护 |protected|✅| ✅ | ✅ | ❌ |
|  默认 |  没有    | ✅| ✅ | ❌ | ❌ |
|  私有 |  private | ✅| ❌ | ❌ | ❌ |

## Java 的属性绑定机制

:::warning
Java 的**属性没有动态绑定机制**, 只有方法有动态绑定机制
:::

```java
class Test {
    String name = "Rose"; // 3 5

    Test() {
        System.out.println("Test"); // 1
    }

    Test(String name) {
        // 属性没有动态绑定机制,哪里用,哪里变
        this.name = name;
    }
}

class Demo extends Test {
    String name = "Jack"; // 4 6

    Demo() {
        super();
        System.out.println("Demo"); // 2
    }

    Demo(String s) {
        super(s);
    }

    public void test() {
        System.out.println(super.name);
        System.out.println(this.name);
    }

    public static void main(String[] args) {
        new Demo().test();
        new Demo("John").test();
    }
}
```
