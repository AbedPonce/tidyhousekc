import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight, Check, Sparkles, ShieldCheck, Leaf, Clock3 } from "lucide-react";
const services = [["01", "Cleaning on Your Schedule", "Choose weekly or bi-weekly cleaning, or schedule a deep clean every three weeks or once a month."], ["02", "The Deep Clean", "A detailed top-to-bottom refresh for first visits, seasonal resets, and homes that need extra attention."], ["03", "The Fresh Start", "Move-in and move-out cleaning that leaves every cabinet, baseboard, and surface ready."]];
function HomePage() {
  const [status, setStatus] = useState("idle");
  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const response = await fetch("/contact-form.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!response.ok) throw new Error();
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsxs("nav", { className: "nav wrap", children: [
      /* @__PURE__ */ jsx("a", { className: "brand", href: "#top", "aria-label": "Tidy House KC home", children: /* @__PURE__ */ jsx("img", { className: "brandLogo", src: "/tidy-house-kc-logo.png", alt: "Tidy House KC", width: "1390", height: "673" }) }),
      /* @__PURE__ */ jsxs("div", { className: "links", children: [
        /* @__PURE__ */ jsx("a", { href: "#services", children: "Services" }),
        /* @__PURE__ */ jsx("a", { href: "#about", children: "Our promise" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", children: "Get a quote" })
      ] }),
      /* @__PURE__ */ jsxs("a", { className: "navCta", href: "#contact", children: [
        "Book a clean ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "hero wrap", id: "top", children: [
      /* @__PURE__ */ jsxs("div", { className: "heroCopy", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "— SERVING THE KANSAS CITY METRO & BEYOND" }),
        /* @__PURE__ */ jsxs("h1", { children: [
          "A cleaner home.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { children: "A lighter day." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: "Thoughtful, dependable home cleaning across the Kansas City Metro area and beyond—so you can spend your time on what matters." }),
        /* @__PURE__ */ jsxs("div", { className: "actions", children: [
          /* @__PURE__ */ jsxs("a", { className: "button", href: "#contact", children: [
            "Get my free quote ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
          ] }),
          /* @__PURE__ */ jsx("a", { className: "under", href: "#services", children: "Explore our services" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "trust", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(Check, {}),
            " Background-checked team"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(Check, {}),
            " Supplies included"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "room", "aria-label": "A bright, freshly cleaned living room illustration", children: [
        /* @__PURE__ */ jsx("div", { className: "sun" }),
        /* @__PURE__ */ jsx("div", { className: "window" }),
        /* @__PURE__ */ jsxs("div", { className: "sofa", children: [
          /* @__PURE__ */ jsx("b", {}),
          /* @__PURE__ */ jsx("b", {})
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "plant", children: [
          /* @__PURE__ */ jsx("i", {}),
          /* @__PURE__ */ jsx("i", {}),
          /* @__PURE__ */ jsx("i", {}),
          /* @__PURE__ */ jsx("b", {})
        ] }),
        /* @__PURE__ */ jsx("div", { className: "spark", children: "✦" }),
        /* @__PURE__ */ jsxs("div", { className: "note", children: [
          /* @__PURE__ */ jsx(Sparkles, {}),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Fresh-home feeling" }),
            "Every visit, guaranteed."
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "intro wrap", id: "services", children: [
      /* @__PURE__ */ jsx("p", { className: "kicker", children: "HOW WE CAN HELP" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { children: "More ease. Less mess." }),
        /* @__PURE__ */ jsx("p", { children: "Choose weekly, bi-weekly, every three weeks, or monthly service to fit your home and your life. Every visit follows a detailed checklist, with room for your personal priorities." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "services wrap", children: services.map((s) => /* @__PURE__ */ jsxs("article", { children: [
      /* @__PURE__ */ jsx("span", { children: s[0] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { children: s[1] }),
        /* @__PURE__ */ jsx("p", { children: s[2] })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "#contact", "aria-label": `Ask about ${s[1]}`, children: /* @__PURE__ */ jsx(ArrowRight, {}) })
    ] }, s[0])) }),
    /* @__PURE__ */ jsx("section", { className: "promise", id: "about", children: /* @__PURE__ */ jsxs("div", { className: "wrap promiseGrid", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "kicker", children: "THE TIDY HOUSE KC PROMISE" }),
        /* @__PURE__ */ jsxs("h2", { children: [
          "Care you can see.",
          /* @__PURE__ */ jsx("br", {}),
          "Quality you can feel."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "icons", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(ShieldCheck, {}),
            "Fully insured"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(Leaf, {}),
            "Thoughtful products"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(Clock3, {}),
            "On time, every time"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "quote", children: [
        /* @__PURE__ */ jsx("b", { children: "“" }),
        /* @__PURE__ */ jsx("blockquote", { children: "Walking into a truly clean home changes the whole rhythm of your week. That’s the feeling we bring to every visit." }),
        /* @__PURE__ */ jsx("p", { children: "— Maya, founder of Tidy House KC" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "contact wrap", id: "contact", children: [
      /* @__PURE__ */ jsxs("div", { className: "contactCopy", children: [
        /* @__PURE__ */ jsx("p", { className: "kicker", children: "LET'S MAKE YOUR HOME SHINE" }),
        /* @__PURE__ */ jsx("h2", { children: "Tell us about your space." }),
        /* @__PURE__ */ jsx("p", { children: "Share a few details and we’ll follow up with a clear, no-pressure quote within one business day." }),
        [["01", "Quick response", "Hear from a real person, not a bot."], ["02", "Clear pricing", "No surprise fees or confusing packages."]].map((x) => /* @__PURE__ */ jsxs("div", { className: "detail", children: [
          /* @__PURE__ */ jsx("span", { children: x[0] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: x[1] }),
            x[2]
          ] })
        ] }, x[0]))
      ] }),
      /* @__PURE__ */ jsx("div", { className: "formCard", children: status === "success" ? /* @__PURE__ */ jsxs("div", { className: "success", children: [
        /* @__PURE__ */ jsx("i", { children: /* @__PURE__ */ jsx(Check, {}) }),
        /* @__PURE__ */ jsx("h3", { children: "Your lighter day starts here." }),
        /* @__PURE__ */ jsx("p", { children: "Thanks for reaching out. We’ll be in touch within one business day with your personalized quote." }),
        /* @__PURE__ */ jsx("button", { className: "under", onClick: () => setStatus("idle"), children: "Send another request" })
      ] }) : /* @__PURE__ */ jsxs("form", { name: "cleaning-quote", method: "POST", "data-netlify": "true", "netlify-honeypot": "bot-field", onSubmit: submit, children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "cleaning-quote" }),
        /* @__PURE__ */ jsx("p", { className: "bot", children: /* @__PURE__ */ jsxs("label", { children: [
          "Leave empty",
          /* @__PURE__ */ jsx("input", { name: "bot-field" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "fieldRow", children: [
          /* @__PURE__ */ jsxs("label", { children: [
            "Your name",
            /* @__PURE__ */ jsx("input", { name: "name", placeholder: "Full name", required: true })
          ] }),
          /* @__PURE__ */ jsxs("label", { children: [
            "Email address",
            /* @__PURE__ */ jsx("input", { name: "email", type: "email", placeholder: "you@example.com", required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fieldRow", children: [
          /* @__PURE__ */ jsxs("label", { children: [
            "Phone number",
            /* @__PURE__ */ jsx("input", { name: "phone", type: "tel", placeholder: "(555) 123-4567", required: true })
          ] }),
          /* @__PURE__ */ jsxs("label", { children: [
            "Service needed",
            /* @__PURE__ */ jsxs("select", { name: "service", defaultValue: "", required: true, children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Choose a service" }),
              /* @__PURE__ */ jsx("option", { children: "Weekly cleaning" }),
              /* @__PURE__ */ jsx("option", { children: "Bi-weekly cleaning" }),
              /* @__PURE__ */ jsx("option", { children: "Deep clean every three weeks" }),
              /* @__PURE__ */ jsx("option", { children: "Monthly deep clean" }),
              /* @__PURE__ */ jsx("option", { children: "One-time deep cleaning" }),
              /* @__PURE__ */ jsx("option", { children: "Move-in / move-out" }),
              /* @__PURE__ */ jsx("option", { children: "Not sure yet" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Tell us a little about your home",
          /* @__PURE__ */ jsx("textarea", { name: "message", rows: 4, placeholder: "Bedrooms, bathrooms, and anything else we should know...", required: true })
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "button submit", disabled: status === "sending", children: [
          status === "sending" ? "Sending…" : "Request my free quote",
          " ",
          /* @__PURE__ */ jsx(ArrowRight, {})
        ] }),
        status === "error" && /* @__PURE__ */ jsx("p", { className: "error", role: "alert", children: "Something went wrong. Please try again." }),
        /* @__PURE__ */ jsx("p", { className: "privacy", children: "No spam. Just a helpful quote from our team." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("footer", { children: [
      /* @__PURE__ */ jsxs("div", { className: "wrap footerTop", children: [
        /* @__PURE__ */ jsx("a", { className: "brand", href: "#top", "aria-label": "Tidy House KC home", children: /* @__PURE__ */ jsx("img", { className: "brandLogo", src: "/tidy-house-kc-logo.png", alt: "Tidy House KC", width: "1390", height: "673" }) }),
        /* @__PURE__ */ jsx("p", { children: "More time for living. Less time cleaning." }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("a", { href: "#services", children: "Services" }),
          /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contact" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "wrap copyright", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Tidy House KC Home Cleaning Co.",
        /* @__PURE__ */ jsx("span", { children: "Serving the Kansas City Metro area and beyond." })
      ] })
    ] })
  ] });
}
export {
  HomePage as component
};
