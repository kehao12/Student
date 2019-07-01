using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI1.Models;

namespace WebAPI1.Controllers
{
    public class USERController : ApiController
    {
        private DbModels db = new DbModels();
        public USERController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/USER
        public IQueryable<USER> GetUSERs()
        {
            return db.USERs;
        }

        // GET: api/USER/5
        [ResponseType(typeof(USER))]
        public IHttpActionResult GetUSER(string id)
        {
            USER uSER = db.USERs.Find(id);
            if (uSER == null)
            {
                return NotFound();
            }

            return Ok(uSER);
        }

        // PUT: api/USER/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUSER(string id, USER uSER)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != uSER.USERNAME)
            {
                return BadRequest();
            }

            db.Entry(uSER).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/USER
        [ResponseType(typeof(USER))]
        public IHttpActionResult PostUSER(USER uSER)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.USERs.Add(uSER);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (USERExists(uSER.USERNAME))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = uSER.USERNAME }, uSER);
        }

        // DELETE: api/USER/5
        [ResponseType(typeof(USER))]
        public IHttpActionResult DeleteUSER(string id)
        {
            USER uSER = db.USERs.Find(id);
            if (uSER == null)
            {
                return NotFound();
            }

            db.USERs.Remove(uSER);
            db.SaveChanges();

            return Ok(uSER);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool USERExists(string id)
        {
            return db.USERs.Count(e => e.USERNAME == id) > 0;
        }
    }
}