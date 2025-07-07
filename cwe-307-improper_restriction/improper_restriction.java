@RestController
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // ⚠️ No rate limiting applied here
        return authService.authenticate(request);
    }
}