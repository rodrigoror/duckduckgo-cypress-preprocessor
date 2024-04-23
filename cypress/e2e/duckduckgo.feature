Feature: Acessar o duckduckgo.com
  Scenario: acessar a pagina principal
    Given Eu acesso a pagina inicial do site
    When Eu uso a url "http://www.duckduckgo.com"
    Then Eu deveria ver a msg "without being tracked"