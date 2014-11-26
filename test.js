function R1(index) {
    switch (index) {
        case 0:
        case 1:
            var strings = ['Hello', '98052', '101'];
            for (var name in strings) {
                var c;
                return;
            }
        case 2:
            var a = 'a';
            return a;
        case 3:
            var strings = ['Hello', '98052', '101'];
            for (var name in strings) {
                var k = 'k';
            }
        case 4:
            return 'b';
        case 5:
            if (true) {
                return 'a';
            }
            else {
                break;
            }
        case 6:
            if (true) {
                return 'a';
            }
            else {
                var b = 'b';
                if (true) {
                    break;
                }
                else {
                    var c = 'c';
                }
            }
        case 7:
            if (true) {
                return 'a';
            }
        default:
            return 'c';
    }
}
