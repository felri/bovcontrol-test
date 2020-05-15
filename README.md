
## [Vídeo](https://streamable.com/z7amcj)

## Rodando o app no celular
### Faça o download do app Expo Client:

[AppStore](https://apps.apple.com/br/app/expo-client/id982107779)

[Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR)

##### Clique Scan QR Code no android ou use sua câmera no iOS:

![Image description](https://i.imgur.com/UhQPnRE.jpg)

##### Use a camêra para ler o QR Code abaixo:

![Image description](https://i.imgur.com/JrEvoqQ.png)

### Rodar localmente

```
yarn global add expo-cli
git clone https://github.com/felri/bovcontrol-test
cd bovcontrol-test
yarn
yarn start
```
Siga os passos acima e leia o QR Code apresentado no terminal

ou

Digita A para abrir o simulador android, I para o simulador iOS em um mac


## Observações



Não uso o expo em projetos pessoais ou profissionais, usei aqui somente para facilitar o deploy e teste do app.

Normalmente faço uso de testes unitários na lógica do reducer, api e etc. Nesse caso não fiz por não ter controle da api.

Usei a api do metaweather, entrei em contato com o suporte do Clima Tempo e me informaram que é necessário um plano pago para ter acesso a previsão via longitude e latitude.

Metaweather vem com a desvantagem de cobrir pouquissimas cidades brasileiras, então dependendo da latitude e longitude que o user estiver, a cidade apresentada pode não ser a correta (meu caso por exemplo, estou em Goiânia e a cidade mais próxima achada pelo metaweather foi Brasília).


Cobri as seguintes possibilidades:

- User nega permissão de localização, tela de erro é apresentada com a opção de tentar novamente
- Primeiro acesso do user e ele não tem internet, tela de erro é apresentada com a opção de tentar novamente
- User entra sem internet com dados já salvos da última sessão, dados são apresentados com o aviso de estar offline
- User entra com internet, redux é atualizado com novos dados
