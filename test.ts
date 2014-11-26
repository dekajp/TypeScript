function R1(index: number) {
    switch (index) {
        case 0:
        /* fall through */
        case 1:
            var strings = ['Hello', '98052', '101'];
            for(var name in strings ){
                var c;
                return;
            }
        case 2:
            var a = 'a';
            return a;
        case 3:
            var strings = ['Hello', '98052', '101'];
            for(var name in strings ){
                var k :any = 'k';
            }
            /* fall through */
        case 4:
            return 'b';
    case 5:
        if (true){
            return 'a';
        }else{
            break;
        }
    case 6:
        if (true){
            return 'a';
        }else{
            var b = 'b'
            if (true){
                break;
            }else{
                var c :string = 'c'
            }
        }
        /* fall through */
    case 7:
        if (true){
            return 'a';
        }
    default:
      return 'c';
    }
}
