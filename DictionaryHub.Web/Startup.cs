using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Web.Routing;
using IdentityServer3.AccessTokenValidation;
using IdentityServer3.Core.Configuration;
using IdentityServer3.Core.Models;
using IdentityServer3.Core.Services.InMemory;
using Microsoft.Owin;
using Owin;
using Serilog;

[assembly: OwinStartup(typeof(DictionaryHub.Web.Startup))]

namespace DictionaryHub.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            Log.Logger = new LoggerConfiguration().MinimumLevel.Debug().WriteTo.RollingFile("c:/tmp/log-{Date}.txt").CreateLogger();
            Log.Information("Starting server");

            app.Map("/identity", idSrv =>
            {
                var scopes = new List<Scope>()
                {
                    new Scope()
                    {
                        Enabled = true,
                        DisplayName = "Dictionary Hub API",
                        Name = "DictionaryHubAPI",
                        Description = "Access to a Dictionary Hub API",
                        Type = ScopeType.Resource
                    }
                };
                scopes.AddRange(StandardScopes.All);

                var clients = new List<Client>()
                {
                    new Client()
                    {
                        ClientName = "JS Client",
                        ClientId = "js_client",
                        AccessTokenType = AccessTokenType.Reference,
                        Flow = Flows.ResourceOwner,

                        ClientSecrets = new List<Secret>
                        {
                            new Secret("secret".Sha256())
                        },
                        AllowedScopes = new List<string>
                        {
                            "DictionaryHubAPI"
                        }
                    }
                };
                var users = new List<InMemoryUser>()
                {
                    new InMemoryUser() { Username = "zeks", Password = "1", Subject = "1"}
                };

                idSrv.UseIdentityServer(new IdentityServerOptions()
                {
                    SiteName = "Dictionary Hub Identity",
                    RequireSsl = false,
                    //SigningCertificate = LoadCertificate(),
                    Factory = new IdentityServerServiceFactory()
                    {
                        
                    }
                    .UseInMemoryClients(clients)
                    .UseInMemoryUsers(users)
                    .UseInMemoryScopes(scopes)
                });
            });

            app.UseIdentityServerBearerTokenAuthentication(new IdentityServerBearerTokenAuthenticationOptions()
            {
                Authority = "http://localhost:64989/Identity",
                RequiredScopes = new[] { "DictionaryHubAPI" },
                DelayLoadMetadata = true
            });
        }
    }
}
