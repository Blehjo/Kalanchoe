using KalanchoeAI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using KalanchoeAI.Models;
using OpenAI.GPT3.Extensions;
using OpenAI.GPT3.Interfaces;

var builder = WebApplication.CreateBuilder(args);
//var openAiApiKey = builder.Configuration["OpenAI:ApiKey"];

// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<KalanchoeAIDatabaseContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("KalanchoeAIDatabaseContext") ?? throw new InvalidOperationException("Connection string 'KalanchoeAIDatabaseContext' not found.")));

var app = builder.Build();

var newBuilder = new ConfigurationBuilder()
    .AddUserSecrets<Program>();

IConfiguration configuration = newBuilder.Build();
var openAiApiKey = configuration["OpenAI:ApiKey"];
var serviceCollection = new ServiceCollection();
serviceCollection.AddScoped(_ => configuration);

serviceCollection.AddOpenAIService(openAiApiKey);

var serviceProvider = serviceCollection.BuildServiceProvider();
var sdk = serviceProvider.GetRequiredService<IOpenAIService>();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");
app.Run();