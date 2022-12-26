using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KalanchoeAI.Data;
using KalanchoeAI.Models;

namespace KalanchoeAI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatCommentController : ControllerBase
    {
        private readonly KalanchoeAIDatabaseContext _context;

        public ChatCommentController(KalanchoeAIDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/ChatComment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChatComment>>> GetChatComments()
        {
          if (_context.ChatComments == null)
          {
              return NotFound();
          }
            return await _context.ChatComments.ToListAsync();
        }

        // GET: api/ChatComment/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ChatComment>> GetChatComment(int id)
        {
          if (_context.ChatComments == null)
          {
              return NotFound();
          }
            var chatComment = await _context.ChatComments.FindAsync(id);

            if (chatComment == null)
            {
                return NotFound();
            }

            return chatComment;
        }

        // PUT: api/ChatComment/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChatComment(int id, ChatComment chatComment)
        {
            if (id != chatComment.Id)
            {
                return BadRequest();
            }

            _context.Entry(chatComment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChatCommentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ChatComment
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ChatComment>> PostChatComment(ChatComment chatComment)
        {
          if (_context.ChatComments == null)
          {
              return Problem("Entity set 'KalanchoeAIDatabaseContext.ChatComments'  is null.");
          }
            _context.ChatComments.Add(chatComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetChatComment", new { id = chatComment.Id }, chatComment);
        }

        // DELETE: api/ChatComment/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChatComment(int id)
        {
            if (_context.ChatComments == null)
            {
                return NotFound();
            }
            var chatComment = await _context.ChatComments.FindAsync(id);
            if (chatComment == null)
            {
                return NotFound();
            }

            _context.ChatComments.Remove(chatComment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ChatCommentExists(int id)
        {
            return (_context.ChatComments?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
