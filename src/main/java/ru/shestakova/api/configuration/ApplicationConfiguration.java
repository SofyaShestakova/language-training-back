package ru.shestakova.api.configuration;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@EnableConfigurationProperties({AuthenticationProperties.class, RegistrationProperties.class})
public class ApplicationConfiguration {
  /*@Bean
  @Profile("test")
  ServletRegistrationBean h2ServletRegistration() {
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(new WebServlet());
    registrationBean.addUrlMappings("/console/*");
    return registrationBean;
  }*/
}
