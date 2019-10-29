public class Test {
    public static void main(String[] args) {
        Color color = Color.BLUE;

    }
}

enum Color {
    RED(1),
    BLUE(2),
    WHITE(3);

    int value;

    Color(int value) {
        this.value = value;
    }
}
