import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

const featured = site.team[0];
const directory = site.team.slice(1);

export function ClinicalTeam() {
  const { t } = useLanguage();
  const copy = t.team;

  return (
    <SectionReveal
      as="section"
      id="corpo-clinico"
      className="section team"
      aria-labelledby="corpo-clinico-title"
    >
      <RevealItem className="team__intro">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="corpo-clinico-title" className="section-title">
            {copy.title}
          </h2>
        </div>
        <p className="section-body">{copy.body}</p>
      </RevealItem>

      <RevealItem className="team__feature">
        <div className="team__portrait">
          <img
            src={featured.image.src}
            alt={copy.imageAlt}
            width={featured.image.width}
            height={featured.image.height}
            style={{ objectPosition: featured.image.position }}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="team__feature-copy">
          <h3>{featured.name}</h3>
          <p className="team__cro">
            {copy.credential} {featured.cro}
          </p>
          <p className="team__bio">{copy.featuredBio}</p>
        </div>
      </RevealItem>

      <ol className="team__directory">
        {directory.map((member) => (
          <li className="team__person" key={member.name}>
            <div className="team__person-image">
              <img
                src={member.image.src}
                alt={`${copy.portraitAlt} ${member.name}`}
                width={member.image.width}
                height={member.image.height}
                style={{ objectPosition: member.image.position }}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="team__person-caption">
              <h3>{member.name}</h3>
              {"cro" in member ? (
                <p className="team__cro">{copy.credential} {member.cro}</p>
              ) : null}
              {"qualificationKey" in member ? (
                <ul className="team__qualifications">
                  {copy.qualifications[member.qualificationKey].map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </SectionReveal>
  );
}
