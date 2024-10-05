// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const homepage = document.querySelector('.homepage');
    const booksSection = document.querySelector('.books-section');
    const bookButtons = document.querySelectorAll('.book-btn');
    const analysisButton = document.querySelector('.analysis-btn');
    const backButton = document.querySelector('.back-btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');

    // Updated data structure: Symbols have only descriptions
    const projectData = {
        theme1: {
            title: 'Theme 1: Disobidience',
            Genesis: {
                symbols: [
                    { desc: 'Eve picking the forbidden fruit from the Tree of the Knowledge of Good and Evil in the Garden of Eden' },
                    { desc: 'The creation of the Tower of Babel' },
                    { desc: 'Lot\'s wife turning into a pillar of salt' },
                ],
                image: 'genesis_image.jpg',
                verse: '"But Lot\'s wife, behind him, looked back, and she became a pillar of salt" (Genesis 19:26 New International Version)'
            },
            Exodus: {
                symbols: [
                    { desc: 'The Golden Calf' },
                    { desc: 'The 10 Plagues' },
                    { desc: 'Israelites spending 40 years in the wilderness' },
                ],
                image: 'exodus_image.jpg',
                verse: '"When Moses approached the camp and saw the calf and the dancing, his anger burned and he threw the tablets out of his hands, breaking them to pieces at the foot of the mountain. And he took the calf the people had made and burned it in the fire; then he ground it to powder, scattered it on the water and made the Israelites drink it. He said to Aaron, \'What did these people do to you, that you led them into such great sin?\'" (Exodus 32:19-21 New International Version)'
            },
            Matthew: {
                symbols: [
                    { desc: 'Herod\'s Disobidience' },
                    { desc: 'Judas Iscariot\'s Disobidience' },
                    { desc: 'Pharisees Disobidience' },
                ],
                image: 'matthew_image.jpg',
                verse: '"Then one of the Twelve—the one called Judas Iscariot—went to the chief priests and asked, \'What are you willing to give me if I deliver him over to you?\' So they counted out for him thirty pieces of silver. From then on Judas watched for an opportunity to hand him over." (Matthew 26:14-16 New International Version)'
            },
            analysis: {
                content: 'The theme begins with personal acts of rebellion from Genesis, like when Eve took the apple or Lot’s wife looked back. These stories center around individual choices that go against divine commands, resulting in consequences. All these acts of disobedience are human desires for knowledge or autonomy. In each case, these choices show how disobedience creates distance from God, showing the tension between human and God. In Exodus the focus shifts from individual disobedience to collective defiance. Stories like the worship of the golden calf or the Israelites’ 40 years of wandering in the wilderness reflect the impatience and fear of an entire community. Faced with uncertainty, the Israelites turn to idolatry and lose faith in God’s plan. This results in consequence that go on for multiple generation. In Matthew disobedience is shown through betrayal and the misuse of power. We see this in Herod’s attempt to kill Jesus, Judas’s betrayal, and the Pharisees’ opposition to God’s will. Here, disobedience becomes more calculated, driven by fear, self-interest, or the desire to hold on to power. This shift shows how disobedience is no longer a simple act of rebellion but a deliberate resistance to God’s plan, especially by those in positions of authority. Across the 3 books we can see how disobedience becomes more and more of a problem as if its humanities nature to disobey god. But each time he shows mercy willing to still help humanity despite its disobedience. '
            }
        },
        // Define theme2 and theme3 similarly
        theme2: {
            title: 'Theme 2: Covenant',
            Genesis: {
                symbols: [
                    { desc: 'Abraham\'s Covenant' },
                    { desc: 'Noah\'s Covenant' },
                    { desc: 'David\'s Covenant' },
                ],
                image: 'genesis_image_theme2.jpg',
                verse: '"The Lord had said to Abram, \'Go from your country, your people and your father\'s household to the land I will show you. I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing. I will bless those who bless you, and whoever curses you I will curse; and all peoples on earthwill be blessed through you." (Genesis 12:1-3 New International Version)'
            },
            Exodus: {
                symbols: [
                    { desc: 'The Promised Land and the Israelites' },
                    { desc: 'Sabbath' },
                    { desc: 'Moses renewing the covenant after the Golden Calf' },
                ],
                image: 'exodus_image_theme2.jpg',
                verse: '"Then the Lord said to Moses, \’Say to the Israelites, \’You must observe my Sabbaths\’. This will be a sign between me and you for the generations to come, so you may know that I am the Lord, who makes you holy\’. Observe the Sabbath, because it is holy to you. Anyone who desecrates it is to be put to death; those who do any work on that day must be cut off from their people. For six days work is to be done, but the seventh day is a day of sabbath rest, holy to the Lord. Whoever does any work on the Sabbath day is to be put to death. The Israelites are to observe the Sabbath, celebrating it for the generations to come as a lasting covenant. It will be a sign between me and the Israelites forever, for in six days the Lord made the heavens and the earth, and on the seventh day he rested and was refreshed." (Exodus 31:12-17 New International Version)'
            },
            Matthew: {
                symbols: [
                    { desc: 'The Beatitudes ' },
                    { desc: 'Jesus\'s Disciples promising to get educate others on the way of God' },
                    { desc: 'The New Covenant' },
                ],
                image: 'matthew_image_theme2.jpg',
                verse: '“Then Jesus came to them and said, \’All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.\’” (Matthew 28:18-20 New International Version)'
            },
            analysis: {
                content: 'The theme of covenant begins with personal promises between God and key people. In Genesis, God makes a covenant with Noah, promising, "Never again will there be a flood to destroy the earth" (Genesis 9:11). Later, God promises Abraham, "I will make you into a great nation, and I will bless you" (Genesis 12:2), establishing a chosen people through faith and obedience. As the story progresses, the covenant shifts from individual to collective. At Mount Sinai, God gives the Israelites the law, saying, "You must observe my Sabbaths... it will be a sign between me and you" (Exodus 31:13). After the golden calf incident, Moses renews the covenant, showing the importance of repentance and reaffirmation of faith (Exodus 34). Finally, the New Covenant is established by Jesus, who says, "This is my blood of the covenant, which is poured out for many for the forgiveness of sins" (Matthew 26:28). Jesus expands the promise to all humanity, instructing his disciples to "go and make disciples of all nations" (Matthew 28:19), reflecting the covenant’s evolution into a universal mission. Across all the books the covenants made helped a group of people and as we transitioned to the next books the group of people got larger. This shows how the covenants scales across the 3 books.'
            }
        },
        theme3: {
            title: 'Theme 3: Redemption',
            Genesis: {
                symbols: [
                    { desc: 'Noah building the Ark for humanity' },
                    { desc: 'Abraham sacrificing Issac' },
                    { desc: 'Joseph escaping slavery and rising up in Egypt' },
                ],
                image: 'genesis_image_theme3.jpg',
                verse: '“\’But God sent me ahead of you to preserve for you a remnant on earth and to save your lives by a great deliverance. So then, it was not you who sent me here, but God. He made me father to Pharaoh, lord of his entire household and ruler of all Egypt\’” (Genesis 45:7-8 New International Version)'
            },
            Exodus: {
                symbols: [
                    { desc: 'The Burning Bush, start of God\'s plan to save the Israelites from bondage' },
                    { desc: 'The Plagues and Passover trying to save the Israelites again' },
                    { desc: 'Moses parting the Red Sea to finally free the Israelites' },
                ],
                image: 'exodus_image_theme3.jpg',
                verse: '“Then the Lord said to Moses, \’Stretch out your hand over the sea so that the waters may flow back over the Egyptians and their chariots and horsemen.\’ Moses stretched out his hand over the sea, and at daybreak the sea went back to its place. The Egyptians were fleeing toward it, and the Lord swept them into the sea. The water flowed back and covered the chariots and horsemen-the entire army of Pharaoh that had followed the Israelites into the sea. Not one of them survived. But the Israelites went through the sea on dry ground, with a wall of water on their right and on their left” (Exodus 14:26-29 New International Version)'
            },
            Matthew: {
                symbols: [
                    { desc: 'Birth of Jesus as redemption for humanity' },
                    { desc: 'Jesus\'s miracles healing people physically and spiritually' },
                    { desc: 'The Ressurection of Jesus' },
                ],
                image: 'matthew_image_theme3.jpg',
                verse: 'When Jesus came down from the mountainside, large crowds followed him. A man with leprosy came and knelt before him and said, \’Lord, if you are willing, you can make me clean.\’ Jesus reached out his hand and touched the man. \’I am willing,\’ he said. \’Be clean!\’ Immediately he was cleansed of his leprosy. Then Jesus said to him, \’See that you don’t tell anyone. But go, show yourself to the priest and offer the gift Moses commanded, as a testimony to them.\’” (Matthew 8:1-4 New International Version)'
            },
            analysis: {
                content: 'Redemption begins with God\'s intervention to save individuals or families. Noah’s ark (Genesis 6-9) represents physical redemption, as God saves Noah’s family from the flood. Abraham and Isaac’s story (Genesis 22) shows God sparing Isaac, symbolizing redemption through faith. Joseph’s rise in Egypt (Genesis 45:7-8) highlights personal redemption, as his suffering leads to saving his family and Egypt from famine. In Exodus, redemption expands to the collective, focusing on the Israelites\' deliverance from Egyptian slavery. The burning bush (Exodus 3) marks the start of God’s plan, followed by the plagues and Passover, where God spares the Israelites while punishing their oppressors. The parting of the Red Sea (Exodus 14) completes their physical liberation. In Matthew, redemption becomes universal through Jesus Christ. His miracles, like healing the leper (Matthew 8:1-4), shows both physical and spiritual redemption. Jesus’ resurrection offers salvation to all, shifting redemption from isolated experiences to a universal experience as everyone can get salvation/redemption.'
            }
        }
    };

    // Handle theme button clicks
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentTheme = button.getAttribute('data-theme');
            const themeTitle = projectData[currentTheme].title;
            document.getElementById('selected-theme-title').innerText = themeTitle;
            homepage.classList.add('hidden');
            booksSection.classList.remove('hidden');
        });
    });

    // Handle book and analysis button clicks
    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const book = button.getAttribute('data-book');
            if (book) {
                openModal(currentTheme, book);
            } else {
                openAnalysisModal(currentTheme);
            }
        });
    });

    analysisButton.addEventListener('click', () => {
        openAnalysisModal(currentTheme);
    });

    // Handle back button click
    backButton.addEventListener('click', () => {
        booksSection.classList.add('hidden');
        homepage.classList.remove('hidden');
    });

    // Handle modal close
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.classList.add('hidden');
        }
    });

    // Function to open modal for books
    function openModal(theme, book) {
        const bookData = projectData[theme][book];
        document.getElementById('modal-title').innerText = `${book} - ${projectData[theme].title}`;
        
        // Populate symbols with descriptions only
        const symbolsContainer = document.querySelector('.symbols');
        symbolsContainer.innerHTML = ''; // Clear previous symbols
        bookData.symbols.forEach((symbol, index) => {
            const p = document.createElement('p');
            p.classList.add('symbol-desc');
            p.innerText = `Symbol ${index + 1}: ${symbol.desc}`;
            symbolsContainer.appendChild(p);
        });

        // Populate image and verse
        const modalImage = document.getElementById('modal-image');
        modalImage.src = bookData.image;
        modalImage.alt = `${book} Image`;
        modalImage.onload = () => {
            // Adjust modal size based on image dimensions if needed
            // Currently handled by CSS
        };
        document.getElementById('modal-verse').innerText = `Verse: ${bookData.verse}`;

        // Ensure image and verse are visible
        document.getElementById('modal-image').style.display = 'block';
        document.getElementById('modal-verse').style.display = 'block';

        modal.classList.remove('hidden');
    }

    // Function to open modal for analysis
    function openAnalysisModal(theme) {
        const analysisData = projectData[theme].analysis;
        document.getElementById('modal-title').innerText = `${projectData[theme].title} - Analysis`;
        
        // Populate symbols with analysis content
        const symbolsContainer = document.querySelector('.symbols');
        symbolsContainer.innerHTML = ''; // Clear previous symbols

        const analysisContent = document.createElement('p');
        analysisContent.classList.add('symbol-desc');
        analysisContent.innerText = analysisData.content;
        symbolsContainer.appendChild(analysisContent);

        // Hide image and verse for analysis
        document.getElementById('modal-image').style.display = 'none';
        document.getElementById('modal-verse').style.display = 'none';

        modal.classList.remove('hidden');
    }
});
