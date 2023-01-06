using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace KalanchoeAI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChagptaiController : ControllerBase
    {
        // GET: api/Chagptai
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Chagptai/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Chagptai
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        private static string? CallOpenAI(int tokens, string input, string engine, double temperature, int topP, int frequencyPenalty, int presencePenalty)
        {
            var openAiKey = "API_KEY";

            var apiCall = "https://api.openai.com/v1/engines/" + engine + "/completions";

            try
            {

                using (var httpClient = new HttpClient())
                {
                    using (var request = new HttpRequestMessage(new HttpMethod("POST"), apiCall))
                    {
                        request.Headers.TryAddWithoutValidation("Authorization", "Bearer " + openAiKey);
                        request.Content = new StringContent("{\n  \"prompt\": \"" + input + "\",\n  \"temperature\": " + temperature.ToString(CultureInfo.InvariantCulture) + ",\n  \"max_tokens\": " + tokens + ",\n  \"top_p\": " + topP + ",\n  \"frequency_penalty\": " + frequencyPenalty + ",\n  \"presence_penalty\": " + presencePenalty + "\n}");

                        request.Content.Headers.ContentType = MediaTypeHeaderValue.Parse("application/json");

                        var response = httpClient.SendAsync(request).Result;
                        var json = response.Content.ReadAsStringAsync().Result;

                        dynamic dynObj = JsonConvert.DeserializeObject(json);

                        if (dynObj != null)
                        {
                            return dynObj.choices[0].text.ToString();
                        }


                    }
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);

            }

            return null;
        }

        // PUT: api/Chagptai/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Chagptai/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
