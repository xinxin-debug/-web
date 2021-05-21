const desc = "请将结果通过printf语句打印出来"
const box_info = [
    //冒泡排序
    {
        name:"冒泡排序",
        desc: desc,
        struct_data:"",
        // 预设置的代码
        code:"//冒泡排序，从小到大（方向可改） 。\n" +
            "#include <stdio.h> \n" +
            "void bubble_sort(int a[], int n);   //申明函数\"bubble_sort\" \n" +
            "void bubble_sort(int a[], int n)    //下面是函数bubble_sort的程序 \n" +
            "{\n" +
            "    int i,j,temp;    //定义三个整型变量 \n" +
            "    for (j=0;j<n-1;j++)    //用一个嵌套循环来遍历一遍每一对相邻元素 （所以冒泡函数慢嘛，时间复杂度高）  \n" +
            "    {                           \n" +
            "        for (i=0;i<n-1-j;i++)\n" +
            "        {\n" +
            "            if(a[i]>a[i+1])  //从大到小排就把左边的\">\"改为\"<\" ！！！\n" +
            "            {\n" +
            "                temp=a[i];      //a[i]与a[i+1](即a[i]后面那个) 交换\n" +
            "                a[i]=a[i+1];    //基本的交换原理\"c=a;a=b;b=c\" \n" +
            "                a[i+1]=temp;\n" +
            "            }\n" +
            "        }\n" +
            "    }    \n" +
            "}\n" +
            "\n" +
            "int main()      //主函数 \n" +
            "{\n" +
            "    int i,n,a;\n" +
            "    int number[3][8]={{8,7,6,5,4,3,2,1},{9,7,6,5,4,3,2,1},\n" +
            "\t\t\t\t\t{0,8,7,6,5,3,2,1}};\n" +
            "\tfor(i=0;i<3;i++){\n" +
            "\t\tbubble_sort(number[i],8);//引用函数bubble_sort\n" +
            "\t}    \n" +
            "    for (i=0;i<3;i++){   //输出传来的排序好的数组 \n" +
            "    \tfor( a=0;a<8;a++){\n" +
            "    \t\tprintf(\"%d \",number[i][a]);\n" +
            "\t\t}\n" +
            "\t\tif(i==2)\n" +
            "\t\t\tbreak;\n" +
            "\t\tprintf(\"\\n\");\n" +
            "\t}    //这里这么写是因为有些题有格式要求(最后一个数后面不能有空格)                                \n" +
            "    return 0;\n" +
            "}\n" +
            "//ENDING\n",
        //输入的三组数据
        input_data:["8 7 6 5 4 3 2 1","9 7 6 5 4 3 2 1","0 8 7 6 5 3 2 1"],
        //输出的三组数据
        pre_data:["1 2 3 4 5 6 7 8 ","1 2 3 4 5 6 7 9 ","0 1 2 3 5 6 7 8 "]
    },
    {
        name:"比较排序",
        desc:desc,
        //输入的三组数据
        input_data:["8 7 6 5 4 3 2 1","9 7 6 5 4 3 2 1","0 8 7 6 5 3 2 1"],
        //输出的三组数据
        pre_data:["1 2 3 4 5 6 7 8 ","1 2 3 4 5 6 7 9 ","0 1 2 3 5 6 7 8 "],
        struct_data:""
    },
    {
        name:"堆排序",
        desc:desc,
        struct_data:"",
        //输入的三组数据
        input_data:["8 7 6 5 4 3 2 1","9 7 6 5 4 3 2 1","0 8 7 6 5 3 2 1"],
        //输出的三组数据
        pre_data:["1 2 3 4 5 6 7 8 ","1 2 3 4 5 6 7 9 ","0 1 2 3 5 6 7 8 "]
    },
    {
        name:"宽度优先遍历",
        desc: "输入格式：\n" +
            "输入n，顶点数；\n" +
            "输入n个字符串，即n个顶点的名称，其编号按输入次序是,0,...,n-1；\n" +
            "输入若干数字对(a b)或<a b>，(a b)表示无向边，<a b>表示有向边；\n" +
            "输入字符x，表示边输入结束；\n" +
            "输入一个数start，表示开始顶点的编号。\n" +
            "\n" +
            "输出格式：\n" +
            "输出生成树的边序列，边的第start个顶点构成的序列应是顶点访问序列。",
        input_data: ["6\n" +
            "A\n" +
            "B\n" +
            "C\n" +
            "D\n" +
            "E\n" +
            "F\n" +
            "( 0 1 )\n" +
            "( 0 2 )\n" +
            "( 0 5 )\n" +
            "( 1 3 )\n" +
            "( 1 5 )\n" +
            "( 2 3 )\n" +
            "( 4 5 )\n" +
            "x\n" +
            "0","6\n" +
        "A\n" +
        "B\n" +
        "C\n" +
        "D\n" +
        "E\n" +
        "F\n" +
        "( 0 1 )\n" +
        "( 0 2 )\n" +
        "( 0 5 )\n" +
        "( 1 3 )\n" +
        "( 1 5 )\n" +
        "( 2 3 )\n" +
        "( 4 5 )\n" +
        "x\n" +
        "0","6\n" +
        "A\n" +
        "B\n" +
        "C\n" +
        "D\n" +
        "E\n" +
        "F\n" +
        "( 0 1 )\n" +
        "( 0 2 )\n" +
        "( 0 5 )\n" +
        "( 1 3 )\n" +
        "( 1 5 )\n" +
        "( 2 3 )\n" +
        "( 4 5 )\n" +
        "x\n" +
        "0"],
        pre_data: ["tree edges: <-1,A> <A,B> <A,C> <A,F> <B,D> <F,E> \n" +
            "visit sequence: A B C F D E ","tree edges: <-1,A> <A,B> <A,C> <A,F> <B,D> <F,E> \n" +
        "visit sequence: A B C F D E ","tree edges: <-1,A> <A,B> <A,C> <A,F> <B,D> <F,E> \n" +
        "visit sequence: A B C F D E "]
    },
    {
        name:"深度优先遍历",
        desc:"输入格式：\n" +
            "输入n，顶点数\n" +
            "输入n个字符串，即n个顶点的名称，其编号按输入次序是：0,...,n-1。\n" +
            "输入若干数字对(a b)或<a b>，(a b)表示无向边，<a b>表示有向边\n" +
            "输入字符x，表示边输入结束\n" +
            "输入一个数start，表示开始顶点的编号\n" +
            "\n" +
            "输出格式：\n" +
            "输出生成树的边序列，边的第start个顶点构成的序列应是顶点访问序列",
        input_data: ["6\n" +
            "A\n" +
            "B\n" +
            "C\n" +
            "D\n" +
            "E\n" +
            "F\n" +
            "( 0 1 )\n" +
            "( 0 2 )\n" +
            "( 0 5 )\n" +
            "( 1 3 )\n" +
            "( 1 5 )\n" +
            "( 2 3 )\n" +
            "( 4 5 )\n" +
            "x\n" +
            "0","6\n" +
        "A\n" +
        "B\n" +
        "C\n" +
        "D\n" +
        "E\n" +
        "F\n" +
        "( 0 1 )\n" +
        "( 0 2 )\n" +
        "( 0 5 )\n" +
        "( 1 3 )\n" +
        "( 1 5 )\n" +
        "( 2 3 )\n" +
        "( 4 5 )\n" +
        "x\n" +
        "0","6\n" +
        "A\n" +
        "B\n" +
        "C\n" +
        "D\n" +
        "E\n" +
        "F\n" +
        "( 0 1 )\n" +
        "( 0 2 )\n" +
        "( 0 5 )\n" +
        "( 1 3 )\n" +
        "( 1 5 )\n" +
        "( 2 3 )\n" +
        "( 4 5 )\n" +
        "x\n" +
        "0"],
        pre_data:["tree edges: <-1,A> <A,B> <B,D> <D,C> <B,F> <F,E>\n" +
            "visit sequence: A B D C F E","tree edges: <-1,A> <A,B> <B,D> <D,C> <B,F> <F,E>\n" +
        "visit sequence: A B D C F E","tree edges: <-1,A> <A,B> <B,D> <D,C> <B,F> <F,E>\n" +
        "visit sequence: A B D C F E"]
    },
    {
        name: "由双遍历序列构造二叉树",
        desc: "树结点结构定义为：\n" +
            "\n" +
            "struct TNode{\n" +
            "        char data;\n" +
            "        struct TNode* left;\n" +
            "        struct TNode* right;\n" +
            "};\n" +
            "输入格式：\n" +
            "输入前序序列\n" +
            "输入中序序列\n" +
            "\n" +
            "输出格式：\n" +
            "输出后序序列",
        input_data: ["ABDECFG\n" +
            "DBEAFCG","ABDECFG\n" +
        "DBEAFCG","ABDECFG\n" +
        "DBEAFCG"],
        pre_data: ["Post Travel Result：DEBFGCA","Post Travel Result：DEBFGCA","Post Travel Result：DEBFGCA"]
    },
    {
        name: "打印二叉树",
        desc: "树结点结构定义为：\n" +
            "\n" +
            "struct TNode{\n" +
            "        char data;\n" +
            "        struct TNode* left;\n" +
            "        struct TNode* right;\n" +
            "};\n" +
            "输入格式：\n" +
            "输入层序序列\n" +
            "\n" +
            "输出格式：\n" +
            "输出打印结果",
        input_data: ["ABD^C^E","ABD^C^E","ABD^C^E"],
        pre_data: ["Print (Root Left)：\n" +
            "--------------E\n" +
            "---------D\n" +
            "----A\n" +
            "--------------C\n" +
            "---------B","Print (Root Left)：\n" +
        "--------------E\n" +
        "---------D\n" +
        "----A\n" +
        "--------------C\n" +
        "---------B","Print (Root Left)：\n" +
        "--------------E\n" +
        "---------D\n" +
        "----A\n" +
        "--------------C\n" +
        "---------B"]
    },
    {
        name:"实现一个顺序存储的线性表",
        desc: "该线性表的结构定义如下：\n" +
            "\n" +
            "struct SeqList{\n" +
            "    T* data;   // 数据元素存储空间的开始地址\n" +
            "    int len;   // 线性表的当前长度\n" +
            "    int max;   // 线性表的最大长度\n" +
            "};\n" +
            "#include <stdio.h>\n" +
            "#include <stdlib.h>\n" +
            "#include \"SeqList.h\"\n" +
            "#pragma warning(disable:4996)\n" +
            "void main()\n" +
            "{\n" +
            "    //设置线性表最多可存储的元素个数max\n" +
            "int max=100;\n" +
            "//创建一个长度为max的空线性表\n" +
            "    SeqList* slist=SL_Create(max);\n" +
            "//声明并读入线性表当前长度n\n" +
            "    int n;\n" +
            "    scanf(\"%d\", &n);\n" +
            "    int i;\n" +
            "    int item;\n" +
            "    //循环读入n个整数，并存入到线性表中\n" +
            "    for (i=0; i<n; i++){\n" +
            "        scanf(\"%d\", &item);\n" +
            "        SL_InsAt(slist, i, item);\n" +
            "    }\n" +
            "//读入一个整数idel，并将线性表中位置idel处的数据元素删除\n" +
            "    int idel;\n" +
            "    scanf(\"%d\", &idel);\n" +
            "    SL_DelAt(slist, idel);\n" +
            "    //读入一个整数整itemdel，并将线性表中第一次出现该值的数据元素删除\n" +
            "    int itemdel;\n" +
            "    scanf(\"%d\", &itemdel);\n" +
            "    SL_DelValue(slist, itemdel);\n" +
            "    SL_Print(slist);\n" +
            "//释放线性表空间\n" +
            "    SL_Free(slist);\n" +
            "}",
        input_data: ["5  //输入线性表的长度\n" +
            "8 9 12 33 45 //依次输入线性表的数据元素\n" +
            "2  //删除线性表的2号数据元素\n" +
            "33  //删除值为33的数据元素","5  //输入线性表的长度\n" +
        "8 9 12 33 45 //依次输入线性表的数据元素\n" +
        "2  //删除线性表的2号数据元素\n" +
        "33  //删除值为33的数据元素","5  //输入线性表的长度\n" +
        "8 9 12 33 45 //依次输入线性表的数据元素\n" +
        "2  //删除线性表的2号数据元素\n" +
        "33  //删除值为33的数据元素"],
        pre_data: ["8 9 45  //输出当前线性表的数据元素","8 9 45  //输出当前线性表的数据元素","8 9 45  //输出当前线性表的数据元素"]
    },
    {
        name: "实现一个链接存储的线性表",
        desc: "struct LinkNode {\n" +
            "    T data;\n" +
            "    LinkNode* next;\n" +
            "};\n" +
            "基于这些属性要素，可以将线性表组织为一个链表结构：\n" +
            "\n" +
            "struct LinkList {\n" +
            "    LinkNode* front;  // 指向头结点\n" +
            "    LinkNode* rear;   // 指向尾结点\n" +
            "    LinkNode* pre;    // 指向当前位置结点的前一个结点\n" +
            "    LinkNode* curr;   // 指向当前位置结点\n" +
            "    int position;     // 当前位置结点的编号\n" +
            "    int len;          // 线性表的大小（链表结点数）\n" +
            "};\n" +
            "#include <stdio.h>\n" +
            "#include <stdlib.h>\n" +
            "#include \"LinkList.h\"\n" +
            "#pragma warning(disable:4996)\n" +
            "int main()\n" +
            "{\n" +
            "    //创建一个线性表\n" +
            "    LinkList* llist=LL_Create();\n" +
            "    //向线性表中插入a个数据元素\n" +
            "    int i;\n" +
            "    int x;\n" +
            "    int a;\n" +
            "    scanf(\"%d\", &a);\n" +
            "    for(i=0; i<a; i++) {\n" +
            "        scanf(\"%d\",&x);\n" +
            "        LL_InsAfter(llist,x);\n" +
            "    }\n" +
            "    //设置线性表当前位置为0\n" +
            "    LL_SetPosition(llist, 0);\n" +
            "    //在线性表表头顺序插入a个元素\n" +
            "    scanf(\"%d\", &a);\n" +
            "    for(i=0; i<a; i++) {\n" +
            "        scanf(\"%d\", &x);\n" +
            "        LL_SetPosition(llist,0);\n" +
            "        LL_InsAfter(llist,x);\n" +
            "    }\n" +
            "    //删除线性表中第一个值为x的元素节点\n" +
            "    scanf(\"%d\", &x);\n" +
            "    LL_DelValue(llist, x);\n" +
            "    //设置当前位置为i，并删除该位置的元素节点\n" +
            "    scanf(\"%d\", &i);\n" +
            "    LL_SetPosition(llist, i);\n" +
            "    LL_DelAt(llist);\n" +
            "    //打印整个线性表然后释放线性表空间\n" +
            "    LL_Print(llist);\n" +
            "    system(\"PAUSE\");\n" +
            "    LL_Free(llist);\n" +
            "}",
        input_data: ["3 //输入一个数a，后面将输入a个数据元素\n" +
            "8 9 3  //a个数据元素，依次插入尾结点后。形成单链表结点序列：8,9,3\n" +
            "3  //输入一个数b，后面将再输入b个数据元素\n" +
            "10 89 22  //b个数据元素，依次插入0号结点后。形成单链表结点序列：8,22,89,10,9,3\n" +
            "89  //删除一个值为89的结点\n" +
            "1  //删除1号结点","3 //输入一个数a，后面将输入a个数据元素\n" +
        "8 9 3  //a个数据元素，依次插入尾结点后。形成单链表结点序列：8,9,3\n" +
        "3  //输入一个数b，后面将再输入b个数据元素\n" +
        "10 89 22  //b个数据元素，依次插入0号结点后。形成单链表结点序列：8,22,89,10,9,3\n" +
        "89  //删除一个值为89的结点\n" +
        "1  //删除1号结点","3 //输入一个数a，后面将输入a个数据元素\n" +
        "8 9 3  //a个数据元素，依次插入尾结点后。形成单链表结点序列：8,9,3\n" +
        "3  //输入一个数b，后面将再输入b个数据元素\n" +
        "10 89 22  //b个数据元素，依次插入0号结点后。形成单链表结点序列：8,22,89,10,9,3\n" +
        "89  //删除一个值为89的结点\n" +
        "1  //删除1号结点"],
        pre_data: ["8 10 9 3","8 10 9 3","8 10 9 3"]
    },
    {
        name: "计算中缀表达式",
        desc: "我们定义了如下函数，其中的 1）已经实现，你需要实现 2）：\n" +
            "1）：\n" +
            "\n" +
            "void compute(LinkStack* so, LinkStack* sd);\n" +
            "/*\n" +
            "so为运算符栈\n" +
            "sd为操作数栈\n" +
            "*/\n" +
            "该函数处理步骤：\n" +
            "\n" +
            "从运算符栈出栈一个运算符；\n" +
            "从操作数栈出栈两个操作数；\n" +
            "用出栈的运算符对出栈的操作数进行运算；\n" +
            "将运算结果进操作数栈。\n" +
            "2）：\n" +
            "\n" +
            "double ComputeInfix(char* s);\n" +
            "/*\n" +
            "s是中缀表达式符号串，如果表达式是7+8,那么s[0]=’7’,s[1]=’+’,s[2]=’8’。\n" +
            "该函数返回表达式计算结果。\n" +
            "*/\n" +
            "在实现 2）的过程中，可以调用 1）。为了简化你的实现，假设表达式中的操作数都是一个非负的个位数。后面的测试中，输入数据将符合这一要求。\n" +
            "#include <stdio.h>\n" +
            "#include <stdlib.h>\n" +
            "#include \"LnkStack.h\"\n" +
            "#include \"infix.h\"\n" +
            "//////////////////////////////////////////////////////////////\n" +
            "void compute(LinkStack* so, LinkStack* sd)\n" +
            "//++++++++++++++++++++++++++++++++++++++++++++++\n" +
            "// so 运算符栈\n" +
            "// sd 操作数栈\n" +
            "// 1 从运算符栈出栈一个运算符\n" +
            "// 2 从操作数栈出栈两个操作数\n" +
            "// 3 用出栈的运算符对出栈的操作数进行运算\n" +
            "// 4 将运算结果进操作数栈\n" +
            "//+++++++++++++++++++++++++++++++++++++++++++++++\n" +
            "{\n" +
            "    T a,b,c,d;\n" +
            "    LS_Pop(so,c);\n" +
            "    LS_Pop(sd,a);\n" +
            "    LS_Pop(sd,b);\n" +
            "    if (c=='*') d=b*a;\n" +
            "    else if (c=='/') d=b/a;\n" +
            "    else if (c=='+') d=b+a;\n" +
            "    else if (c=='-') d=b-a;\n" +
            "    else printf(\"never occur!\");\n" +
            "    LS_Push(sd, d);\n" +
            "}\n" +
            "double ComputeInfix(char* s)\n" +
            "{\n" +
            "    // 请在此添加代码，补全函数ComputeInfix，计算中缀表达式\n" +
            "    /********** Begin *********/\n" +
            "    /********** End **********/\n" +
            "}",
        input_data:["(1+2)*(9-6)","(1+2)*(9-6)","(1+2)*(9-6)"],
        pre_data: ["result = 9.000000","result = 9.000000","result = 9.000000"]
    },
    {
        name: "计算后缀表达式",
        desc: "为了计算后缀表达式，我们定义了如下函数，这个函数需要你来实现：\n" +
            "\n" +
            "double ComputePostfix(char* s);\n" +
            "/*\n" +
            "s是后缀表达式符号串，如果表达式是7 8 +,那么s[0]=’7’,s[1]=’8’,s[2]=’+’。\n" +
            "该函数返回表达式计算结果。\n" +
            "*/\n" +
            "为了简化你的实现，假设表达式中的操作数都是一个非负的个位数。后面的测试中，输入数据将符合这一要求。\n" +
            "\n" +
            "编程要求\n" +
            "本关的编程任务是补全 step2/Postfix.cpp 文件中ComputePostfix函数，以实现计算后缀表达式的功能。具体要求如下：\n" +
            "\n" +
            "本关任务要求通过实现函数double ComputePostfix(char* s)来计算后缀表达式；\n" +
            "具体请参见后续测试样例。\n" +
            "本关涉及的代码文件 Postfix.cpp 的代码框架如下：\n" +
            "\n" +
            "#include <stdio.h>\n" +
            "#include <stdlib.h>\n" +
            "#include \"LnkStack.h\"\n" +
            "#include \"postfix.h\"\n" +
            "double ComputePostfix(char* s)\n" +
            "{\n" +
            "    // 请在此添加代码，补全函数ComputePostfix，计算后缀表达式\n" +
            "    /********** Begin *********/\n" +
            "    /********** End **********/\n" +
            "}\n" +
            "输入输出说明：\n" +
            "输入格式：\n" +
            "输入一个后缀表达式。表达式中的操作数都是一个非负的个位数。\n" +
            "输出格式：\n" +
            "输出该表达式的值。",
        input_data: ["12+96-*","12+96-*","12+96-*"],
        pre_data: ["result = 9.000000","result = 9.000000","result = 9.000000"]
    },
    {
        name: "实现折半查找",
        desc: "将pkey、len、max组织成一个结构，该结构定义为：\n" +
            "\n" +
            "struct BSeqList{\n" +
            "    int* pkey;  // 指向关键码数组的指针\n" +
            "    int len;  // 当前元素个数\n" +
            "    int max;  // 线性表的最大元素数\n" +
            "};\n" +
            "只要给定指向该结构的一指针blist，就可对线性表进行操作。\n" +
            "\n" +
            "对折半查找的顺序表定义如下操作，各个操作函数的功能详见下面给出的代码文件 BSlist.cpp 的代码框架：\n" +
            "\n" +
            "BSeqList* BSL_Create(int size);\n" +
            "void BSL_Free(BSeqList* blist);\n" +
            "int BSL_InsKey(BSeqList* blist, int key);\n" +
            "int BSL_FindKey(BSeqList* blist, int key);\n" +
            "int BSL_DelKey(BSeqList* blist, int key);\n" +
            "void BSL_Print(BSeqList* blist);\n" +
            "编程要求\n" +
            "本关的编程任务是补全 step1/BSlist.cpp 文件中的BSL_FindKey函数，以实现在已排序的顺序表中查找关键码值为key的结点并返回该结点的编号。当返回值大于等于 0 时则表示找到值为key的结点的编号，若为 -1 则表示没有找到。\n" +
            "\n" +
            "具体请参见后续测试样例。\n" +
            "本关涉及的代码文件 BSlist.cpp 的代码框架如下：\n" +
            "\n" +
            "#include <stdio.h>\n" +
            "#include <stdlib.h>\n" +
            "#include \"bsList.h\"\n" +
            "BSeqList* BSL_Create(int size)\n" +
            "//创建一个顺序表\n" +
            "//与BSL_Free()配对\n" +
            "{\n" +
            "    BSeqList* blist=(BSeqList*)malloc(sizeof(BSeqList));\n" +
            "    blist->pkey = (int*)malloc(sizeof(int)*size);\n" +
            "    blist->max=size;\n" +
            "    blist->len=0;\n" +
            "    return blist;\n" +
            "}\n" +
            "void BSL_Free(BSeqList* blist)\n" +
            "//释放/删除顺序表\n" +
            "//与BSL_Create()配对\n" +
            "{\n" +
            "    free(blist->pkey);\n" +
            "    free(blist);\n" +
            "}\n" +
            "int BSL_FindKey(BSeqList* blist, int key)\n" +
            "//在排序的顺序表中查找关键码值为key的结点，返回结点的编号\n" +
            "//返回值大于等于0时表示找到值为key的结点的编号，-1表示没有找到\n" +
            "{\n" +
            "    // 请在此添加代码，补全函数BSL_FindKey\n" +
            "    /********** Begin *********/\n" +
            "    /********** End **********/\n" +
            "}\n" +
            "int BSL_InsKey(BSeqList* blist, int key)\n" +
            "//在排序的顺序表中插入一个值为key的结点\n" +
            "//返回值大于等于0表示插入的位置, -1表示表满（无法插入）\n" +
            "{\n" +
            "    if (blist->len>=blist->max) return -1;\n" +
            "    int k, r, m;\n" +
            "    k=0; r=blist->len-1;\n" +
            "    //寻找插入位置\n" +
            "    while (k<=r) {\n" +
            "        m=(k+r)>>1; //m=(k+r)/2\n" +
            "        if (key == blist->pkey[m]) return -2;////若不允许插入已存在的值，则需要此行\n" +
            "        if (key<blist->pkey[m])  r=m-1;\n" +
            "        else k=m+1;\n" +
            "    }\n" +
            "    //插入位置为k, 腾出k号位置\n" +
            "    for (r=blist->len; r>k; r--) \n" +
            "        blist->pkey[r]=blist->pkey[r-1];\n" +
            "    //key放入k号位置\n" +
            "    blist->pkey[k]=key;\n" +
            "    blist->len++;\n" +
            "    return k;\n" +
            "}\n" +
            "int BSL_DelKey(BSeqList* blist, int key)\n" +
            "//在排序的顺序表中删除值为key的结点, \n" +
            "//存在值为x的结点则返回结点编号, 未找到返回－1\n" +
            "{\n" +
            "    int k=BSL_FindKey(blist, key);\n" +
            "    if (k<0) return -1;\n" +
            "    int i=k;\n" +
            "    while(i < blist->len-1) {\n" +
            "        blist->pkey[i] = blist->pkey[i+1];\n" +
            "        i++;\n" +
            "    }\n" +
            "    blist->len --;\n" +
            "    return k;\n" +
            "}\n" +
            "void BSL_Print(BSeqList* blist)\n" +
            "//打印整个顺序表\n" +
            "{\n" +
            "    if (blist->len==0) {\n" +
            "        printf(\"The list is empty.\\n\");\n" +
            "        return;\n" +
            "    }\n" +
            "    printf(\"The list contains: \");\n" +
            "    for (int i=0; i<blist->len; i++) {\n" +
            "        printf(\"%d  \", blist->pkey[i]);\n" +
            "    }\n" +
            "    printf(\"\\n\");\n" +
            "}\n" +
            "输入输出格式说明\n" +
            "\n" +
            "输入格式：\n" +
            "首先输入一个正整数max，创建一个最多可存储max个元素的表。\n" +
            "然后输入多个操作：如果输入 “insert” ，则后面跟一个数x，表示将x插入；如果输入 “delete” ，则后面跟一个数x，表示将x删除；如果输入 “end” ，表示输入结束。\n" +
            "\n" +
            "输出格式：\n" +
            "输出表的长度，然后从表头到表尾依次输出各元素。\n" +
            "\n" +
            "以下是平台对 step1/Main.cpp 的样例测试集：",
        input_data:["9\n" +
            "insert 9\n" +
            "insert 8\n" +
            "insert 89\n" +
            "insert 11\n" +
            "insert 22\n" +
            "insert 13\n" +
            "delete 11\n" +
            "delete 5\n" +
            "end","9\n" +
        "insert 9\n" +
        "insert 8\n" +
        "insert 89\n" +
        "insert 11\n" +
        "insert 22\n" +
        "insert 13\n" +
        "delete 11\n" +
        "delete 5\n" +
        "end","9\n" +
        "insert 9\n" +
        "insert 8\n" +
        "insert 89\n" +
        "insert 11\n" +
        "insert 22\n" +
        "insert 13\n" +
        "delete 11\n" +
        "delete 5\n" +
        "end"],
        pre_data: ["list length: 5\n" +
            "The list contains: 8  9  13  22  89","list length: 5\n" +
        "The list contains: 8  9  13  22  89","list length: 5\n" +
        "The list contains: 8  9  13  22  89"]
    },
    {
        name: "实现散列查找",
        desc: "独立链表的每个结点是一个 struct HNode 结构，其定义如下：\n" +
            "\n" +
            "struct HNode {\n" +
            "    int key; //假设关键码为整数\n" +
            "    HNode* next;\n" +
            "};\n" +
            "在散列表中，如果表项的key字段等于 0 （假设有效的关键码值不等于 0 ），则表示该行是一条空链表，例如图 1 中编号为 4 和编号为 6 的行。\n" +
            "\n" +
            "散列表的开始地址保存在pn中，散列表的行数为n（图 1 中，n=7），将pn和n组织成结构：\n" +
            "\n" +
            "struct LHTable {\n" +
            "    HNode* pn;  //指向散列表，每个表结点是独立链表的表头结点\n" +
            "    int n; //散列表的长度，一般取（小于等于数据个数的最大）质数\n" +
            "};\n" +
            "定义如下操作，各操作函数的功能详见下面给出的代码文件 indLnkHash.cpp 的代码框架：\n" +
            "\n" +
            "LHTable* ILH_Create(int n);\n" +
            "void ILH_Free(LHTable* pt);\n" +
            "bool ILH_InsKey(LHTable* pt, int x);\n" +
            "bool ILH_FindKey(LHTable* pt, int x);\n" +
            "bool ILH_DelKey(LHTable* pt, int x);\n" +
            "void ILH_Print(LHTable *pt);\n" +
            "本关涉及的代码文件 indLnkHash.cpp 的代码框架如下：\n" +
            "\n" +
            "#include <stdio.h>\n" +
            "#include <stdlib.h>\n" +
            "#include <time.h>\n" +
            "#include \"indLnkHash.h\"\n" +
            "LHTable* ILH_Create(int n)\n" +
            "//创建散列表, n为表长度，最佳取值：n取小于等于数据个数的最大质数\n" +
            "{\n" +
            "    HNode* pn=(HNode*)malloc(sizeof(HNode)*n);\n" +
            "    for (int i=0; i<n; i++) {\n" +
            "        pn[i].key=0;\n" +
            "        pn[i].next=NULL;\n" +
            "    }\n" +
            "    LHTable* pt=(LHTable*)malloc(sizeof(LHTable));\n" +
            "    pt-> pn=pn;\n" +
            "    pt->n=n;\n" +
            "    return pt;\n" +
            "}\n" +
            "void ILH_Free(LHTable* pt)\n" +
            "//释放散列表\n" +
            "{\n" +
            "    if (pt==NULL) return;\n" +
            "    for (int i=0; i<pt->n; i++) {\n" +
            "        HNode* curr=pt->pn[i].next;\n" +
            "        while (curr) {\n" +
            "            HNode* next=curr->next;\n" +
            "            free(curr);\n" +
            "            curr=next;\n" +
            "        }\n" +
            "    }\n" +
            "    free(pt->pn);\n" +
            "    free(pt);\n" +
            "}\n" +
            "bool ILH_InsKey(LHTable* pt, int x)\n" +
            "//插入关键码x\n" +
            "//返回true，表示插入成功\n" +
            "//返回false，表示插入失败(关键码已经存在)\n" +
            "{\n" +
            "    // 请在此添加代码，补全函数ILH_InsKey\n" +
            "    /********** Begin *********/\n" +
            "    /********** End **********/\n" +
            "}\n" +
            "bool ILH_FindKey(LHTable* pt, int x)\n" +
            "//查找关键码x\n" +
            "//返回true表示找到\n" +
            "//返回false表示没找到\n" +
            "{\n" +
            "    int d=x%pt->n;\n" +
            "    if (pt->pn[d].key==0) {\n" +
            "        return false;\n" +
            "    }\n" +
            "    else if (pt->pn[d].key==x) \n" +
            "        return true;\n" +
            "    HNode* curr=pt->pn[d].next;\n" +
            "    while (curr && curr->key!=x) curr=curr->next;\n" +
            "    if (curr) return  true;\n" +
            "    else return false;\n" +
            "}\n" +
            "bool ILH_DelKey(LHTable* pt, int x)\n" +
            "//删除关键码\n" +
            "//返回true表示该关键码存在，且成功删除\n" +
            "//返回false表示该关键码不存在\n" +
            "{\n" +
            "    // 请在此添加代码，补全函数ILH_DelKey\n" +
            "    /********** Begin *********/\n" +
            "    /********** End **********/\n" +
            "}\n" +
            "void ILH_Print(LHTable *pt)\n" +
            "{\n" +
            "    for (int i=0; i<pt->n; i++) {\n" +
            "        printf(\"%5d:  \", i);\n" +
            "        if (pt->pn[i].key) {\n" +
            "            printf(\"%d  \", pt->pn[i].key);\n" +
            "            HNode* curr=pt->pn[i].next;\n" +
            "            while (curr) {\n" +
            "                printf(\"-> %d  \", curr->key);\n" +
            "                curr=curr->next;\n" +
            "            }\n" +
            "            printf(\"\\n\");\n" +
            "        }\n" +
            "        else \n" +
            "            printf(\"-\\n\");\n" +
            "    }\n" +
            "}\n" +
            "输入输出格式说明\n" +
            "\n" +
            "输入格式：\n" +
            "首先输入一个正整数n，创建一个长n的散列表。\n" +
            "然后输入多个操作：如果输入 “insert” ，则后面跟一个数x，表示将x插入；如果输入 “delete” ，则后面跟一个数x，表示将x删除；如果输入 “end” ，表示输入结束。\n" +
            "\n" +
            "输出格式：\n" +
            "输出n个独立链表。",
        input_data: ["11\n" +
            "insert 54\n" +
            "insert 77\n" +
            "insert 94\n" +
            "insert 89\n" +
            "insert 14\n" +
            "insert 45\n" +
            "insert 76\n" +
            "insert 23\n" +
            "insert 43\n" +
            "insert 47\n" +
            "end","11\n" +
        "insert 54\n" +
        "insert 77\n" +
        "insert 94\n" +
        "insert 89\n" +
        "insert 14\n" +
        "insert 45\n" +
        "insert 76\n" +
        "insert 23\n" +
        "insert 43\n" +
        "insert 47\n" +
        "end","11\n" +
        "insert 54\n" +
        "insert 77\n" +
        "insert 94\n" +
        "insert 89\n" +
        "insert 14\n" +
        "insert 45\n" +
        "insert 76\n" +
        "insert 23\n" +
        "insert 43\n" +
        "insert 47\n" +
        "end"],
        pre_data: ["0:  77\n" +
            "    1:  89  -> 45  -> 23\n" +
            "    2:  -\n" +
            "    3:  14  -> 47\n" +
            "    4:  -\n" +
            "    5:  -\n" +
            "    6:  94\n" +
            "    7:  -\n" +
            "    8:  -\n" +
            "    9:  -\n" +
            "   10:  54  -> 76  -> 43","0:  77\n" +
        "    1:  89  -> 45  -> 23\n" +
        "    2:  -\n" +
        "    3:  14  -> 47\n" +
        "    4:  -\n" +
        "    5:  -\n" +
        "    6:  94\n" +
        "    7:  -\n" +
        "    8:  -\n" +
        "    9:  -\n" +
        "   10:  54  -> 76  -> 43","0:  77\n" +
        "    1:  89  -> 45  -> 23\n" +
        "    2:  -\n" +
        "    3:  14  -> 47\n" +
        "    4:  -\n" +
        "    5:  -\n" +
        "    6:  94\n" +
        "    7:  -\n" +
        "    8:  -\n" +
        "    9:  -\n" +
        "   10:  54  -> 76  -> 43"]
    }

]
