package ru.shestakova.api.configuration;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.Arrays;
import java.util.List;

@ConfigurationProperties(value = "api.auth")
@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
public class AuthenticationProperties {

  private Boolean whitelistMode = Boolean.TRUE;
  private List<String> patterns = Arrays.asList(
      "POST /forum/topics",
      "POST,PATCH,DELETE /texts",
          "POST,PATCH,DELETE /works",
      "PATCH /forum/topics/[0-9]+",
      "POST,DELETE /forum/topics/[0-9]+/[a-zA-Z]+",
      "POST /forum/messages/[0-9]+",
      "PATCH /forum/messages/[0-9]+/[0-9]+",
      "DELETE /forum/messages/[0-9]+/[0-9]+/delete",
      "* /users"
  );
}
