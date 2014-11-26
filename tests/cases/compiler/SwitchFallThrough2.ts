function R1(index: number) {
    switch (index) {
        case 0:
            /* fall through */
        case 1:
            var strings = ['Hello', '98052', '101'];
            /* fall through */
        case 21:
            var strings = [];
            for(var name in strings ){
                // should never execute
                var k :any = 'k';
                return ;
            }
            /* fall through */
        case 22:
            var i = 0;
            for (; i < 10;) {
                i++;
            }
            /* fall through */
        case 31:
            var n = 0;
            while (n > 3) {
                break; 
            }
            /* fall through */
        case 32:
            var n = 0;
            while (n > 3) {
            }
            /* fall through */
        case 51:
            do { } while (false);
            /* fall through */
        case 52:
            do {
                var a = 'c';
            } while (false);
            /* fall through */
        case 53:
            do {
                var a = 'c';
                break;
            } while (false);
        case 61:
            try { 
                return ;
            } catch(e) { 
                
            } finally { } 
            /* fall through */
        case 62:
            var a = 'a';
            var i = 0;
            try{
                for (; i > 10;) {
                    break;
                }
                // Can fall through here
            } catch (e) {
                break;
            }
            /* fall through */
        case 63:
            var a = 'a';
            var i = 0;
            try{
                do{
                    break;
                }while(false)
            } catch (e) {
                break;
            }
        case 64:
            try { 
                
            } catch(e) { 
                
            } finally { 
                break;
            }
        case 71:
            if (true){
               
            }else{
                
            }
            /* fall through */
        case 72:
            if (true){
                return 'a';
            }else{
                var b = 'b'
                if (true){
                    break;
                }else{
                    var c :string = 'c'
                    // fall 
                }
            }
            /* fall through */
        case 73:
            if (true){
                while(false){
                    break;
                }
                // fall
            }else{
                do { 
                    break;
                } while (true);
            }
            /* fall through */
        case 74:
            if (true){
                break;
            }else{
                do { 
                    break;
                } while (true);
            }
        default:
          return 'c';
    }
}
