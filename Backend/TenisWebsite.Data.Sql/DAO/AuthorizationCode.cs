﻿using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace TenisWebsite.Data.Sql.DAO
{
    public class AuthorizationCode
    {
        public int AuthorizationCodeId { get; set; }
        public string Key { get; set; }
        public string UserId { get; set; }

    }
}
